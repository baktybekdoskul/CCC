import { Component, OnInit } from '@angular/core';
import {Message, TabView} from 'primeng/primeng';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  title: string;
  content: string;
  constructor(private postService: PostService) { }
  msgs: Message[] = [];
  ngOnInit() {
  }
  public createPost(title: string, content: string) {
    this.postService.createPost(title, content).subscribe((res) => null,
      err => {this.content = '';
        this.title = '';
        this.showErrorMessage(err)},
      () => {this.content = '';
        this.title = ''; });
  }

  showErrorMessage(err) {
    if ( err.statusCode === 401) {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Your session has expired!', detail: 'please logout and login again'});
    }
  }
}
