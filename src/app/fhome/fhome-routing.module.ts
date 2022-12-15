import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FhomePage } from './fhome.page';

const routes: Routes = [
  {
    path: '',
    component: FhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FhomePageRoutingModule {}
