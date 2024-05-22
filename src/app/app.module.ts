import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./components/Login/Login.component";
import { HomeComponent } from "./components/Home/Home.component";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/Register/Register.component";
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from "@angular/router";

@NgModule({
    imports: [
        FormsModule,
        AppRoutingModule,
        BrowserModule,
        RouterOutlet
    ],
    declarations: [

    ],
    bootstrap: [],
})

export class AppModule { };