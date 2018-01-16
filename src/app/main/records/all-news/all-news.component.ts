import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../services/post.service';
import {IPost} from '../../../model_interfaces/IPost.interface';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  posts: IPost[] = []
  constructor(private postService: PostService) {
    this.posts = this.postService.getAllPosts();
  }

  ngOnInit() {
  }
  like(postId: number) {
    this.posts[postId-1].rating++;
  }
  dislike(postId: number) {
    this.posts[postId-1].rating--;
  }

  public deletePost(id: number): void {
    this.postService.deletePost(id);
  }
}
