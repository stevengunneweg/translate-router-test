import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home.page';

const routes: Routes = [
	{
		component: HomePageComponent,
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
export class HomeRoutingModule {}
