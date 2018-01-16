import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  posts: any[] = []
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPopular();
  }
  like(postId: number) {
    this.posts[postId-1].rating++;
  }
  dislike(postId: number) {
    this.posts[postId-1].rating--;
  }
}
