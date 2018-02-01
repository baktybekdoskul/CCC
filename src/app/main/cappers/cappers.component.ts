import { Component, OnInit } from '@angular/core';
import {CappersService} from '../../services/cappers.service';
import {IUser} from '../../model_interfaces/IUser.interface';
import {Message} from 'primeng/primeng';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cappers',
  templateUrl: './cappers.component.html',
  styleUrls: ['./cappers.component.css']
})
export class CappersComponent implements OnInit {
  users: IUser[] = [];
  followedUsers: IUser[] = [];
  msgs: Message[] = [];
  constructor(private cappersService: CappersService,
              private router: Router) { }

  ngOnInit() {
    this.cappersService.getCappers().subscribe((res) => {
      this.users = res.data; },
      err => this.showErrorMessage(err));
  }
  showErrorMessage(err) {
    if ( err.statusCode === 401) {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Your session has expired!', detail: 'please logout and login again'});
    }
  }

  goToCapperDetail(id: number) {
    this.router.navigate(['/main/capper/' + id.toString() ]);
  }
}
