import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error.routing.module';
import { SharedModule } from '../../shared.module';
import { ErrorPageComponent } from './error.page';

/**
 * Error page module
 */
@NgModule({
	declarations: [ErrorPageComponent],
	imports: [SharedModule, ErrorRoutingModule],
})
export class ErrorPageModule {}
