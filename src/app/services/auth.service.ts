import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../model_interfaces/IUser.interface";


@Injectable()
export class AuthService {
  constructor(private http: Http,
              private router: Router,
              private httpService: HttpClient) {
  }

  public checkSessionThenAuthenticate(login: string, key: string) {
    /*this.http.get(this.checkSessionUrl).subscribe((r: Response) => {
        if ( r.json() === false) {
          this.authenticate(login, key);
        } else if (r.json().email === login) {
          this.router.navigate(['/home']);
        } else {
          console.log('something worng with login process');
        }
      },
      err => console.log('something went wrong checking the session'));*/

    console.log('login is:' + login);
    console.log('password is:' + key);
  }

  public doRegister(user: IUser, password: string, passwordMatch: string) {
    /*const httpBody = {id: student.id, email: student.email, firstname: student.firstname, lastname: student.lastname, password: password, passwordMatch: passwordMatch};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({headers: headers});
    this.http.post(this.registerUrl, httpBody, options).subscribe((r: Response) => {
        student = r.json() || {}; console.log(r.json()); }, err => console.log('something went wrong during the registratio'),
      () => {
        console.log(student);
        if (student.email !== '' && student.email !=null) {
          this.sessionService.createSession(student);
          this.router.navigate(['/home']);
        }else {
          this.router.navigate(['/login']);
        }
      });*/
    console.log("we are here with user details:" + user.firstname + '  ' + password + '   ' + passwordMatch);
  }

}
