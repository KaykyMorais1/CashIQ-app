import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: "./Login.component.html",
  styleUrl: "./Login.component.css",
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  user = new User();
  email = '';
  senha = '';

  constructor(private router: Router) { }

  options: AnimationOptions = {
    path: './assets/animation.json',
  };

  nome: any;

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  login() {

    console.log("test");
    this.router.navigate(["/home"]);
    // Autenticação do usuário
  }

}
