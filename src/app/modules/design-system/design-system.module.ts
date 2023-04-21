import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system.routing';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
