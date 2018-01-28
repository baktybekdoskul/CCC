import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../services/post.service';
import {IPost} from '../../../model_interfaces/IPost.interface';
import {Like} from '../../../model_interfaces/like.interface';
import {SessionService} from '../../../services/session.service';
import {Response} from '@angular/http';
import {SailsService} from 'angular2-sails';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css'],
  providers: [MessageService]
})
export class AllNewsComponent implements OnInit {
  posts: IPost[] = [];
  msgs: Message[] = [];
  constructor(private postService: PostService,
              private sessionService: SessionService,
              private _sailsService: SailsService,
              private _messageService: MessageService
              ) {
    this.postService.getAllPosts().subscribe(
      (res) => {this.posts = res.data; },
          err => {
          if ( err.statusCode === 401) {
              this.msgs = [];
              this.msgs.push({severity: 'error', summary: 'Your session has expired!', detail: 'please logout and login again'});
          }} );
  }

  ngOnInit() {

  }

  like(post: IPost, value: number) {
    const likes: Like = {
      post: post.id,
      value: value,
      user: this.sessionService.user.id
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
          console.log(like);
          like.value = -1 * like.value;
          this.postService.deletePostLike(like.id).subscribe((res) => null,
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
    this.postService.likePost(likes).subscribe((res: any) => null,
      err => console.log('something went wrong during the liking post'),
      () => {
              this.postService.getAllPosts().subscribe((res ) => {
                this.posts = [];
                this.posts = res.data;
              });
            });
  }

  public deletePost(id: number): void {
    this.postService.deletePost(id);
  }

  countRating(curPost: IPost): number {
    let rating = 0;
    for (let i = 0; i < curPost.likes.length; i++) {
      rating += curPost.likes[i].value;
    }

    return rating;
  }


}
