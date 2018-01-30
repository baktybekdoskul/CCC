import {Injectable} from '@angular/core';
import {SYS_ORIGIN} from '../constants/constants';
import {Observable} from 'rxjs/Observable';
import {SailsService} from 'angular2-sails';
import {SessionService} from './session.service';

@Injectable()
export class CappersService {
  private basePath = SYS_ORIGIN;
  private getCappersListPath = this.basePath + '/user';
  constructor(private sailsService: SailsService,
          private sessionService: SessionService) {
    }

  public getCappers(): Observable<any> {
    const path = this.getCappersListPath + '?token=' + this.sessionService.user.token;
    return this.sailsService.get(path).pipe();
  }
}
