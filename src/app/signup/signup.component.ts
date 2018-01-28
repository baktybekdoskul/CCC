import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../model_interfaces/iuser.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  newUser: IUser = {};
  constructor(private _fb: FormBuilder,
              private _route: ActivatedRoute,
              private _router: Router,
              private _auth: AuthService) {
    this.registerForm = this._fb.group({
        email: ['', Validators.required],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        password: ['', Validators.required],
        passwordMatch: ['', Validators.required]
      }
    );
  }

  ngOnInit() {

  }
  registerClick() {
    this.newUser.name = this.registerForm.value.name;
    this.newUser.surname = this.registerForm.value.surname;
    this.newUser.email = this.registerForm.value.email;
    this.newUser.id = this.registerForm.value.id;
    this._auth.doRegister(this.newUser, this.registerForm.value.password, this.registerForm.value.passwordMatch );
  }
}
