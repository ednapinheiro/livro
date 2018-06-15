import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UmPage } from './um';

@NgModule({
  declarations: [
    UmPage,
  ],
  imports: [
    IonicPageModule.forChild(UmPage),
  ],
})
export class UmPageModule {}
