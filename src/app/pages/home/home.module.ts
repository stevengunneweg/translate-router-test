import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../../shared.module';
import { HomePageComponent } from './home.page';

/**
 * Home page module
 */
@NgModule({
	declarations: [HomePageComponent],
	imports: [SharedModule, HomeRoutingModule],
})
export class HomePageModule {}
