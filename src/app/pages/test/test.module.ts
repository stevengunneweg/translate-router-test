import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test.routing.module';
import { SharedModule } from '../../shared.module';
import { TestPageComponent } from './test.page';

/**
 * Test page module
 */
@NgModule({
	declarations: [TestPageComponent],
	imports: [SharedModule, TestRoutingModule],
})
export class TestPageModule {}
