import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttributesComponent } from './add-attributes/add-attributes.component';

const routes: Routes = [
  {
    path: '',
    component: AddAttributesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAttributesRoutingModule { }
