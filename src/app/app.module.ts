import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import {MainModule} from './main/main.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {AutoCompleteModule, ButtonModule, InputTextModule, PanelModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {SessionService} from "./services/session.service";
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    PanelModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    RouterModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [AuthService, SessionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
