import { Component, OnInit } from '@angular/core';
import {TabView} from 'primeng/primeng';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  content: string;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  public createPost(content: string) {
    this.postService.createPost(content);
    this.content = '';
  }
}
