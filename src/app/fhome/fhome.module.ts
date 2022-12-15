import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FhomePageRoutingModule } from './fhome-routing.module';

import { FhomePage } from './fhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FhomePageRoutingModule
  ],
  declarations: [FhomePage]
})
export class FhomePageModule {}
