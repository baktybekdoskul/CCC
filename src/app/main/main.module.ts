import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {FormsModule} from '@angular/forms';
import {MainRoutingModule} from './main-routing/main-routing.module';
import { RecordsComponent } from './records/records.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    MainComponent,
    RecordsComponent,
    BlogsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule

  ]
})
export class MainModule {}
