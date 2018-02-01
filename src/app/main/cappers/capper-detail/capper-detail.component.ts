import { Component, OnInit } from '@angular/core';
import {CappersService} from '../../../services/cappers.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {IUser} from '../../../model_interfaces/IUser.interface';
import {isNullOrUndefined} from 'util';
import {Message} from 'primeng/primeng';
import {SessionService} from '../../../services/session.service';

@Component({
  selector: 'app-capper-detail',
  templateUrl: './capper-detail.component.html',
  styleUrls: ['./capper-detail.component.css']
})
export class CapperDetailComponent implements OnInit {
  user: IUser = {};
  msgs: Message[]= [];
  followers: IUser[] = [];
  uploadedFiles: any[] = [];


  constructor(private capperService: CappersService,
              private activRoute: ActivatedRoute,
              private sessionService: SessionService) { }

  ngOnInit() {
    const id = this.activRoute.snapshot.paramMap.get('id');
    this.capperService.getCapperById(id).subscribe((res) => this.user = res.data,
      err => console.log(err),
      () => { this.updateFollowsList();
      });
  }

  hasImage(url): boolean {
    if (isNullOrUndefined(url)) {
      return false;
    }
    return true;
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  updateFollowsList() {
    this.capperService.getFollowersById(this.user.id).subscribe(
      res => this.followers = res.data);
  }

  hasFollowed(): boolean {
    for ( let follower of this.followers) {
      if (follower.id === this.sessionService.user.id) {
        return true;
      }
    }
    return false;
  }

  isSameUser(id: number): boolean {
    if (id === this.sessionService.user.id) {
      return true;
    }
    return false;
  }

  followCapper(id: number): void {
    this.capperService.followCapper(id).subscribe(res => null,
      err => console.log(err),
      () => {
        this.updateFollowsList();
      });
  }

  unFollowCapper(id: number): void {
    this.capperService.unFollowCapper(id).subscribe(res => null,
      err => console.log(err),
      () => {
        this.updateFollowsList();
      });
  }
}
