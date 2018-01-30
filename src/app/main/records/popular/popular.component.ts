import {Component, Injector, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {BasePostListComponent} from '../base-post-list.component';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent extends BasePostListComponent implements OnInit {
  constructor(private __injector: Injector
  ) {
    super(__injector, 'allPosts');
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPostList();
  }
}
