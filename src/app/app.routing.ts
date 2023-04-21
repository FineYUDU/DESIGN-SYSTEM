import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'main',
    loadChildren:()=> import ('./modules/design-system/design-system.module').then (m => m.DesignSystemModule)
  },
  { path: '**',redirectTo:'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
