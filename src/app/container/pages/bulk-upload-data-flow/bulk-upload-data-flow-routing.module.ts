import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkUploadDataFlowComponent } from './bulk-upload-data-flow/bulk-upload-data-flow.component';

const routes: Routes = [
  {
    path: '',
    component: BulkUploadDataFlowComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkUploadDataFlowRoutingModule { }
