import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {FormsModule} from '@angular/forms';
import {MainRoutingModule} from './main-routing/main-routing.module';
import { RecordsComponent } from './records/records.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { CappersComponent } from './cappers/cappers.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileSettingsComponent } from './my-profile-settings/my-profile-settings.component';

@NgModule({
  declarations: [
    MainComponent,
    RecordsComponent,
    BlogsComponent,
    AboutComponent,
    CappersComponent,
    MyProfileComponent,
    MyProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule

  ]
})
export class MainModule {}
