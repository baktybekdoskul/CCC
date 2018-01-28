import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import {MainModule} from './main/main.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {AutoCompleteModule, ButtonModule, GrowlModule, InputTextModule, PanelModule} from 'primeng/primeng';
import {AuthService} from './services/auth.service';
import {SessionService} from './services/session.service';
import {AuthGuard} from './auth.guard';
// import {SocketIoConfig, SocketIoModule} from 'ng-socket-io';
import {SailsModule} from 'angular2-sails';

 // const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
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
    // SocketIoModule.forRoot(config),
    CommonModule,
    HttpModule,
    FormsModule,
    SailsModule.forRoot(),
    PanelModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    RouterModule,
    GrowlModule,
    MainModule,
    AppRoutingModule
  ],
  providers: [AuthService, SessionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
