import {Injectable} from '@angular/core';
import {IUser} from '../model_interfaces/IUser.interface';
import {IPost} from '../model_interfaces/IPost.interface';
import {SYS_ORIGIN} from '../constants/constants';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CappersService {
  res: IUser[] = [];
  private basePath = SYS_ORIGIN;
  private getCappersListPath = this.basePath + '/user/getUsers';
  constructor(private http: Http,
              private httpClient: HttpClient) {
    }

  public getCappers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.getCappersListPath);
  }
}
