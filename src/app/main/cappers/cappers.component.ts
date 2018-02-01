import { Component, OnInit } from '@angular/core';
import {CappersService} from '../../services/cappers.service';
import {IUser} from '../../model_interfaces/IUser.interface';
import {Message} from 'primeng/primeng';
import {Router} from '@angular/router';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'app-cappers',
  templateUrl: './cappers.component.html',
  styleUrls: ['./cappers.component.css']
})
export class CappersComponent implements OnInit {
  users: IUser[] = [];
  followingUsers: IUser[] = [];
  msgs: Message[] = [];
  constructor(private cappersService: CappersService,
              private router: Router,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.cappersService.getCappers().subscribe((res) => {
      this.users = res.data; },
      err => this.showErrorMessage(err));
    this.updateFollowingUsers();
  }
  showErrorMessage(err) {
    if ( err.statusCode === 401) {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Your session has expired!', detail: 'please logout and login again'});
    }
  }

  updateFollowingUsers(): void {
    this.cappersService.getFollowsById(this.sessionService.user.id).subscribe(
      res => this.followingUsers = res.data,
      err => this.showErrorMessage(err)
    );
  }

  goToCapperDetail(id: number) {
    this.router.navigate(['/main/capper/' + id.toString() ]);
  }
}
