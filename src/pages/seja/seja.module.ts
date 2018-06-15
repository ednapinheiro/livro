import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SejaPage } from './seja';
//import { Http } from '@angular/http';

@NgModule({
  declarations: [
    SejaPage,
  ],
  imports: [
    IonicPageModule.forChild(SejaPage),
  ],
})
export class SejaPageModule {}
