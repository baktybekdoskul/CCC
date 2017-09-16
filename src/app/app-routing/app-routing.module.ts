import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "../signup/signup.component";


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
