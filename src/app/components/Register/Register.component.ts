import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../models/User.model';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './Register.service';

@Component({
  selector: 'app-register',
  templateUrl: "./Register.component.html",
  styleUrl: './Register.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {

  constructor(public registerService: RegisterService) { }

  user = new User();
  isValid = true;

  register() {
    if (!this.user.email && !this.user.password) {
      this.isValid = false;
  } else {
    this.registerService.register(this.user);
  }
   }
}
