import {Component, Injector, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {BasePostListComponent} from '../base-post-list.component';

@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css']
})
export class FollowedComponent extends BasePostListComponent implements OnInit {
  constructor(private __injector: Injector
  ) {
    super(__injector, 'followed');
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPostList();
  }

}
