import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkUploadProductsRoutingModule } from './bulk-upload-products-routing.module';
import { BulkUploadProductsComponent } from './bulk-upload-products/bulk-upload-products.component';


@NgModule({
  declarations: [
    // BulkUploadProductsComponent
  ],
  imports: [
    CommonModule,
    BulkUploadProductsRoutingModule
  ]
})
export class BulkUploadProductsModule { }
