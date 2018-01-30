import {Component, Injector, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {IPost} from '../../../model_interfaces/IPost.interface';
import {Like} from '../../../model_interfaces/like.interface';
import {SessionService} from '../../../services/session.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/primeng';
import {isNullOrUndefined} from 'util';
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
