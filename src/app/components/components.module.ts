import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ServicesModule } from "../services/services.module";


@NgModule({
	declarations: [
	],
	exports: [
	],
	imports: [
		CommonModule,
		CoreModule,
		ServicesModule
	]
})
export class ComponentsModule { }
