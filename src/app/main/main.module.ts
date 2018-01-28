import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MainRoutingModule} from './main-routing/main-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { CappersComponent } from './cappers/cappers.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileSettingsComponent } from './my-profile-settings/my-profile-settings.component';
import {TabViewModule} from 'primeng/primeng';
import {RecordsModule} from './records/records.module';
import {BlogService} from '../services/blog.service';
import {PostService} from '../services/post.service';
import {CappersService} from '../services/cappers.service';


@NgModule({
  declarations: [
    MainComponent,
    BlogsComponent,
    AboutComponent,
    CappersComponent,
    MyProfileComponent,
    MyProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    TabViewModule,
    RecordsModule,
    HttpClientModule

  ],
  providers: [PostService, BlogService, CappersService]
})
export class MainModule {}
