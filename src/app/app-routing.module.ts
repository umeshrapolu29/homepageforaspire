import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { DropComponent } from './drop/drop.component';


const routes: Routes = [
 {
    path:'form11',component:FormComponent
  },
  {path:'drop',component:DropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
