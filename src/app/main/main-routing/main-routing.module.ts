import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main.component';
import {RecordsComponent} from '../records/records.component';
import {BlogsComponent} from '../blogs/blogs.component';
import {AboutComponent} from '../about/about.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'records', component: RecordsComponent},
      { path: 'blogs', component: BlogsComponent},
      { path: 'about', component: AboutComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class MainRoutingModule { }
