import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../model_interfaces/IUser.interface';
import {SessionService} from './session.service';
import {SYS_ORIGIN} from '../constants/constants';
import {isNullOrUndefined} from 'util';


@Injectable()
export class AuthService {
  private baseAuthUrl: string = SYS_ORIGIN;
  registerUrl = this.baseAuthUrl + '/user/create';
  private logoutUrl: string = this.baseAuthUrl + '/user/logout';
  private signInUrl: string = this.baseAuthUrl + '/user/login';
  constructor(private http: Http,
              private router: Router,
              private httpService: HttpClient,
              private sessionService: SessionService
              ) {
  }

  public authenticate(email: string, key: string) {
    const httpBody = {email: email, password: key};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({headers: headers});
    let user: IUser = {};
    this.http.post(this.signInUrl, httpBody, options).subscribe((r: Response) =>
      { user.token = r.json().token; user.id = r.json().user.id; } , err => console.log('something went wrong during the authorization'),
      () => {
        if (user.token !== '' && !isNullOrUndefined(user.token)) {
          user.email = email;
          this.sessionService.createSession(user);
          this.router.navigate(['/main']);
        }else {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  public doRegister(user: IUser, password: string, passwordMatch: string) {
    const httpBody = {email: user.email, name: user.name, surname: user.surname,
      password: password, confirmation: passwordMatch};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    const options = new RequestOptions({headers: headers});
    this.http.post(this.registerUrl, httpBody, options).subscribe((r: Response) => {
        }, err => console.log('something went wrong during the registratio'),
      () => {
        this.authenticate(user.email, password);
      });
  }
  public doLogout() {
    const httpBody = {token: this.sessionService.user.token};
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    console.log(httpBody);
    this.http.post(this.logoutUrl, httpBody, options).subscribe((r: Response) => {},
      err => {console.log('something went wrong during the logout');
           this.sessionService.invalidate();
           this.router.navigate(['/login']);
        },
      () => {
        this.sessionService.invalidate();
        this.router.navigate(['/login']);
      });

  }

}
