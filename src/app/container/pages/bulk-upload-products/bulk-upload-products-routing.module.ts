import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkUploadProductsComponent } from './bulk-upload-products/bulk-upload-products.component';

const routes: Routes = [
  {
    path: '',
    component: BulkUploadProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkUploadProductsRoutingModule { }
