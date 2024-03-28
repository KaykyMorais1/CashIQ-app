import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AnimationItem } from 'lottie-web';
import { FormControl, FormGroup } from '@angular/forms';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, LottieComponent
  ],
  templateUrl: "./Login.component.html",
  styleUrl: "./Login.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  options: AnimationOptions = {
    path: './assets/animation.json',
  };

  nome: any;

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  login() {
    console.log("test");
    // Autenticação do usuário
  }

}
