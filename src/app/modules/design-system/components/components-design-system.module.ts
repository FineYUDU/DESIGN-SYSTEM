import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsOverviewComponent } from './cards-overview/cards-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CardsOverviewComponent
  ],
  exports: [
    CardsOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsDesignSystemModule { }
