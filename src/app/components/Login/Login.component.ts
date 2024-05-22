import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from './Login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: "./Login.component.html",
  styleUrl: "./Login.component.css",
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  user = new User();
  isValid = true;

  constructor(public loginService: LoginService) { }

  login() {
    if (!this.user.email && !this.user.password) {
        this.isValid = false;
    } else {
      this.loginService.login(this.user);
    }
  }

}
