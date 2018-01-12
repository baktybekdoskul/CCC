import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main.component';
import {RecordsComponent} from '../records/records.component';
import {BlogsComponent} from '../blogs/blogs.component';
import {AboutComponent} from '../about/about.component';
import {CappersComponent} from "../cappers/cappers.component";
import {MyProfileComponent} from "../my-profile/my-profile.component";
import {MyProfileSettingsComponent} from "../my-profile-settings/my-profile-settings.component";
import {LoginComponent} from "../../login/login.component";
import {AuthGuard} from '../../auth.guard';
import {AllNewsComponent} from '../records/all-news/all-news.component';
import {FollowedComponent} from '../records/followed/followed.component';
import {PopularComponent} from '../records/popular/popular.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'records',
        component: RecordsComponent,
        children: [
          { path: 'allNews', component: AllNewsComponent},
          {path: 'followed', component: FollowedComponent},
          {path: 'popular', component: PopularComponent},
          //{path: '', redirectTo: '/main/records/allNews', pathMatch: 'full'}
        ]
      },
      { path: 'blogs', component: BlogsComponent},
      { path: 'about', component: AboutComponent},
      { path: 'cappers', component: CappersComponent},
      { path: 'my-profile', component: MyProfileComponent},
      { path: 'my-profile-settings', component: MyProfileSettingsComponent}
    ]
  },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class MainRoutingModule { }
