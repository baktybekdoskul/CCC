import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './services/auth.service';
import {SessionService} from './services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService,
              private session: SessionService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loginExpr = /login/;
    const mainExpr = /main/;
    if (loginExpr.test(state.url.toString())) {
      if (!this.session.isActive) {
        return true;
      }else {
        this.router.navigate(['/main']);
        return false;
      }
    } else {
      if (this.session.isActive) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
