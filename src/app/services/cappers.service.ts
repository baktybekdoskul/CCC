import {Injectable} from '@angular/core';
import {SYS_ORIGIN} from '../constants/constants';
import {Observable} from 'rxjs/Observable';
import {SailsService} from 'angular2-sails';
import {SessionService} from './session.service';

@Injectable()
export class CappersService {
  private basePath = SYS_ORIGIN;
  private getCappersListPath = this.basePath + '/user';
  private getFollowPath = this.basePath + '/user/follow';
  private getFollowsPath = this.basePath + '/user/getFollows';
  private getFollowersPath = this.basePath + '/user/getFollowers';
  private getUnfollowPath = this.basePath + '/user/unfollow';
  constructor(private sailsService: SailsService,
          private sessionService: SessionService) {
    }

  public getCappers(): Observable<any> {
    const path = this.getCappersListPath + '?token=' + this.sessionService.user.token;
    return this.sailsService.get(path).pipe();
  }

  public getFollowsById(id: number): Observable<any> {
    const path = this.getFollowsPath + '/' + id + '?token=' + this.sessionService.user.token;
    return this.sailsService.get(path).pipe();
  }

  public getFollowersById(id: number): Observable<any> {
    const path = this.getFollowersPath + '/' + id + '?token=' + this.sessionService.user.token;
    return this.sailsService.get(path).pipe();
  }

  public getCapperById(id: string): Observable<any> {
    const path = this.getCappersListPath + '/' + id + '?token=' + this.sessionService.user.token;
    return this.sailsService.get(path).pipe();
  }

  public followCapper(id: number): Observable<any> {
    const body = {
      token: this.sessionService.user.token,
      id: id
    }
    return this.sailsService.post(this.getFollowPath, body).pipe();
  }

  public unFollowCapper(id: number): Observable<any> {
    const body = {
      token: this.sessionService.user.token,
      id: id
    }
    return this.sailsService.post(this.getUnfollowPath, body).pipe();
  }
}
