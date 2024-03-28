import { Routes } from '@angular/router';
import { LoginComponent } from './components/Login/Login.component';
import { HomeComponent } from './components/Home/Home.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];
