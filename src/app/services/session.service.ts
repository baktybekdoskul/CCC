import {Injectable, Injector} from '@angular/core';
import {IUser} from '../model_interfaces/iuser.interface';
import {Router} from '@angular/router';
import {LS_CURRENT_USER, LS_CURRENT_USER_OBJECT} from '../constants/constants';
@Injectable()
export class SessionService {
  private _user: IUser;
  constructor(private router: Router) {
  }
  public createSession(user: IUser) {
    localStorage.setItem(LS_CURRENT_USER_OBJECT, JSON.stringify(user));
    localStorage.setItem(LS_CURRENT_USER, user.email);
    this._user = user;
  }

  public get user(): IUser {
    if (this._user == null) {
      const userAsJsonText = localStorage.getItem(LS_CURRENT_USER_OBJECT);
      if (userAsJsonText != null && userAsJsonText !== '') {
        this._user = <IUser> JSON.parse(userAsJsonText);
      }
    }
    return this._user;
  }
  public get isActive(): boolean {
    return this.user != null;
  }

  public invalidate() {
    if (this._user != null) {
      localStorage.removeItem(LS_CURRENT_USER);
      localStorage.removeItem(LS_CURRENT_USER_OBJECT);
      this._user = null;
    }
    if (this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }
}
