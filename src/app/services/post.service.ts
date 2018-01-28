import {Injectable} from '@angular/core';
import {SYS_ORIGIN} from '../constants/constants';
import {SessionService} from './session.service';
import {Router} from '@angular/router';
import {BaseRequestOptions, Http, RequestOptions} from '@angular/http';
import {IPost} from '../model_interfaces/IPost.interface';

import {Like} from '../model_interfaces/like.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Header} from 'primeng/primeng';
import {SailsService} from 'angular2-sails';

@Injectable()
export class PostService {
  allPosts: IPost[] = [];

  popular: IPost[] = [];
  followed: IPost[] = [];
  private basePath: string = SYS_ORIGIN;
  createNewPost = this.basePath + '/post/create';
  getAllPostsPath = this.basePath + '/post';
  editPost = this.basePath + '/post/edit';
  deletePostPath = this.basePath + '/post/delete';
  likePostPath = this.basePath + '/like';
  deletePostLikePath = this.basePath + '/like';
  constructor(private http: Http,
              private router: Router,
              private httpClient: HttpClient,
              private sessionService: SessionService,
              private _sailsService: SailsService
              )
  {
    this._sailsService.connect('http://localhost:1337');
  }


  public getAllPosts(): Observable<any> {
    return this._sailsService.get(this.getAllPostsPath + '?token=' + this.sessionService.user.token).pipe();
  }
  public getPopular(): IPost[] {
    return this.popular;
  }

  public getFollowed(): IPost[] {
    return this.followed;
  }

  public createPost(content: string): void {
    console.log(content);
  }

  public deletePost(id: number): void {
    console.log('deleted ' + id);
  }

   public likePost(like: Like): Observable<any> {
    const httpBody = {
      token : this.sessionService.user.token,
      value : like.value,
      id : like.post
    };
    return this._sailsService.post(this.likePostPath, httpBody).pipe();
  }

  public deletePostLike(id: number): Observable<any> {
    const httpBody = {
      token: this.sessionService.user.token
    };
    const delPath = this.deletePostLikePath + '/' + id.toString();
    return this._sailsService.delete(delPath, httpBody).pipe();
  }
}
