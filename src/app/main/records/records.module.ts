import {NgModule} from '@angular/core';
import { AllNewsComponent } from './all-news/all-news.component';
import {RecordsComponent} from './records.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FollowedComponent } from './followed/followed.component';
import { PopularComponent } from './popular/popular.component';
import {RouterModule} from '@angular/router';
import {GrowlModule} from 'primeng/primeng';


@NgModule({  declarations: [
        RecordsComponent,
        AllNewsComponent,
        FollowedComponent,
        PopularComponent,
  ],
  imports: [CommonModule,
          RouterModule,
          FormsModule,
          HttpClientModule,
          GrowlModule]
})
export class RecordsModule {

}
