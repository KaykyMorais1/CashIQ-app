import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  register(user: User) {
    console.log("Usuario: ", user)
  }

}
