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
  getFollowedPostsPath = this.basePath + '/post/followed';
  getPopularPostsPath = this.basePath + '/post/popular';
  editPost = this.basePath + '/post/edit';
  deletePostPath = this.basePath + '/post';
  likePostPath = this.basePath + '/like';
  deletePostLikePath = this.basePath + '/like';
  constructor(private http: Http,
              private router: Router,
              private httpClient: HttpClient,
              private sessionService: SessionService,
              private _sailsService: SailsService
              )
  {

  }


  public getAllPosts(): Observable<any> {
    return this._sailsService.get(this.getAllPostsPath + '?token=' + this.sessionService.user.token).pipe();
  }
  public getPopular(): Observable<any> {
    // should be changed to this.getPopularPostsPath
    return this._sailsService.get(this.getAllPostsPath + '?token=' + this.sessionService.user.token).pipe();
  }

  public getFollowed(): Observable<any> {
    // should be changed to this.getPopularPostsPath
    return this._sailsService.get(this.getAllPostsPath + '?token=' + this.sessionService.user.token).pipe();
  }

  public createPost(titleM: string, contentM: string): void {
    const httpBody = {
        token: this.sessionService.user.token,
        title: titleM,
        content: contentM
    };
    this._sailsService.post(this.createNewPost, httpBody).subscribe();
  }

  public deletePost(id: number): Observable<any>{
    const httpBody = {
      token: this.sessionService.user.token,
      id: id
    };
    const delPath = this.deletePostPath + '/' + id;
    console.log(delPath);
    return this._sailsService.delete(delPath, httpBody).pipe();
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
