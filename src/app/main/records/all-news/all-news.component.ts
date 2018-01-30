import {Component, Injector, OnInit} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import {BasePostListComponent} from '../base-post-list.component';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css'],
  providers: [MessageService]
})
export class AllNewsComponent extends BasePostListComponent implements OnInit {
  constructor(private __injector: Injector
              ) {
      super(__injector, 'allPosts');
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPostList();
  }
}
