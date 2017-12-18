import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {SessionService} from "../services/session.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username: string;
  constructor(private authService: AuthService,
              private sessionService: SessionService) {
    this.username = this.sessionService.user.email;
  }
  ngOnInit() {
  }
  doLogout() {
    this.authService.doLogout();
  }
}
