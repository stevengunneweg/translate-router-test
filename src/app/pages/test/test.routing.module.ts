import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPageComponent } from './test.page';

const routes: Routes = [
  {
    component: TestPageComponent,
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
export class TestRoutingModule {}
