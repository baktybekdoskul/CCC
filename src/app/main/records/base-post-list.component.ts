import {Injector, OnInit} from '@angular/core';
import {IPost} from '../../model_interfaces/IPost.interface';
import {Message} from 'primeng/primeng';
import {PostService} from '../../services/post.service';
import {Like} from '../../model_interfaces/like.interface';
import {SessionService} from '../../services/session.service';
import {isNullOrUndefined} from "util";

export abstract class BasePostListComponent implements OnInit {
  posts: IPost[] = [];
  msgs: Message[] = [];
  private _postService: PostService;
  private _sessionService: SessionService;
  constructor(private injector: Injector,
              private componentName: string) {
  }

  ngOnInit(): void {
    this._postService = this.injector.get(PostService);
    this._sessionService = this.injector.get(SessionService);
  }

  getPostList(typeOfPost?: string): void {
    if (this.componentName === 'allPosts' || typeOfPost === 'allPosts') {
      this._postService.getAllPosts().subscribe(
        (res) => {this.posts = res.data; },
        err => {
            this.showErrorMessage(err);
          } );
    }else if (this.componentName === 'followed' || typeOfPost === 'followed') {
      this._postService.getFollowed().subscribe(
        (res) => {this.posts = res.data; },
        err => {
          this.showErrorMessage(err);
        } );
    }else if (this.componentName === 'popular' || typeOfPost === 'popular') {
      this._postService.getPopular().subscribe(
        (res) => {this.posts = res.data; },
        err => {
          this.showErrorMessage(err);
        } );
    }

  }
  like(post: IPost, value: number) {
    const likes: Like = {
      post: post.id,
      value: value,
      user: this._sessionService.user.id
    };
    if (post.likes.length !== 0) {

      for (let like of post.likes) {

        if ( like.value === value && likes.user === like.user) {
          this.msgs = [];
          let msg = 'You have already ';
          if (value === 1) {
            msg += 'liked!';
          }else {
            msg += 'disliked!';
          }
          this.msgs = [];
          this.msgs.push({severity: 'warn', summary: msg, detail: ''});
        } else if (like.user === likes.user ) {
          like.value = -1 * like.value;
          this._postService.deletePostLike(like.id).subscribe((res) => null,
            err => {if (err.statusCode === 401) {
              this.msgs = [];
              this.msgs.push({severity: 'error', summary: 'Your session has expired!', detail: 'please logout and login again'});
            }},
            () => this.likePost(likes));

        } else {
          this.likePost(likes);
        }
      }
    }else {
      this.likePost(likes);
    }
  }

  likePost(likes: Like) {
    this._postService.likePost(likes).subscribe((res: any) => null,
      err => console.log('something went wrong during the liking post'),
      () => {
        this.getPostList('');
      });
  }

  showErrorMessage(err) {
    if ( err.statusCode === 401) {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Your session has expired!', detail: 'please logout and login again'});
    }
  }
  public deletePost(id: number): void {
    this._postService.deletePost(id).subscribe((res) => null, err => null,
      () =>  this.getPostList());
  }
  countRating(curPost: IPost): number {
    let rating = 0;
    for (let i = 0; i < curPost.likes.length; i++) {
      rating += curPost.likes[i].value;
    }

    return rating;
  }

  isValid(post: IPost) {
    if (isNullOrUndefined(post.active) === true) {
      return true;
    }
    return post.active;
  }

  hasRight(post: IPost): boolean {
    if ( post.user.id === this._sessionService.user.id) {
      return true;
    }
    return false;
  }
}
