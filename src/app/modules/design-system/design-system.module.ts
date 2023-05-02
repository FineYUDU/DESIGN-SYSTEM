import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system.routing';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocsComponent } from './pages/docs/docs.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { ComponentsDesignSystemModule } from './components/components-design-system.module';
import { TablesComponent } from './pages/tables/tables.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { CameraComponent } from './pages/camera/camera.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    MainPageComponent,
    DocsComponent,
    ExamplesComponent,
    PatternsComponent,
    TablesComponent,
    SummaryComponent,
    CameraComponent,
    ActivityComponent,
  ],
  imports: [
    CommonModule,
    ComponentsDesignSystemModule,
    SharedModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
