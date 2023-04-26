import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { PatternsComponent } from './pages/patterns/patterns.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent,
    children:[
      { path: 'docs', component:DocsComponent },
      { path: 'examples', component: ExamplesComponent },
      { path: 'patterns', component: PatternsComponent },
      { path: 'tables', component: TablesComponent },
      { path:'**', redirectTo:'docs' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemRoutingModule { }
