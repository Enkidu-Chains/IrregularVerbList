import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from "../services/services.module";
import { CoreModule } from '../core/core.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
	declarations: [
		MainComponent,
  HeaderComponent
	],
	exports: [
		MainComponent
	],
	imports: [
		CommonModule,
		CoreModule,
		ServicesModule
	]
})
export class ComponentsModule { }
