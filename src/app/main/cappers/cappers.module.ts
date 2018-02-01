import {NgModule} from '@angular/core';
import {CappersComponent} from './cappers.component';
import {CommonModule} from '@angular/common';
import {FileUploadModule, GrowlModule, TabViewModule} from 'primeng/primeng';
import { CapperDetailComponent } from './capper-detail/capper-detail.component';
import {CappersService} from '../../services/cappers.service';

@NgModule({
  declarations: [
    CappersComponent,
    CapperDetailComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    GrowlModule,
    FileUploadModule
  ],
  providers: [CappersService]
})
export class CappersModule {

}
