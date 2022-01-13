import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error.page';

const routes: Routes = [
  {
    component: ErrorPageComponent,
    path: '',
  },
];

/**
 * Marks an class as an NgModule so it could be configured
 */
@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class ErrorRoutingModule {}
