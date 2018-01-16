import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css']
})
export class FollowedComponent implements OnInit {
  posts: any[] = [];
  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.posts = this.postService.getFollowed();
  }
  like(postId: number) {
    this.posts[postId-1].rating++;
  }
  dislike(postId: number) {
    this.posts[postId-1].rating--;
  }
}
