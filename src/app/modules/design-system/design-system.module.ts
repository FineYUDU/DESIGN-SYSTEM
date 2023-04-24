import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system.routing';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocsComponent } from './pages/docs/docs.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { PatternsComponent } from './pages/patterns/patterns.component';


@NgModule({
  declarations: [
    MainPageComponent,
    DocsComponent,
    ExamplesComponent,
    PatternsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
