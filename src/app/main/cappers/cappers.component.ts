import { Component, OnInit } from '@angular/core';
import {CappersService} from '../../services/cappers.service';
import {IUser} from '../../model_interfaces/IUser.interface';

@Component({
  selector: 'app-cappers',
  templateUrl: './cappers.component.html',
  styleUrls: ['./cappers.component.css']
})
export class CappersComponent implements OnInit {
  users: IUser[];
  constructor(private cappersService: CappersService) { }

  ngOnInit() {
    this.cappersService.getCappers().subscribe((res: IUser[]) => this.users = res);
  }
  /*like(postId: number) {
    this.posts[postId-1].rating++;
  }
  dislike(postId: number) {
    this.posts[postId-1].rating--;
  }*/
}
