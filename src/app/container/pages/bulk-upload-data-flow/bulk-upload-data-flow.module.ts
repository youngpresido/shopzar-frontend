import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkUploadDataFlowRoutingModule } from './bulk-upload-data-flow-routing.module';
import { BulkUploadDataFlowComponent } from './bulk-upload-data-flow/bulk-upload-data-flow.component';


@NgModule({
  declarations: [
    // BulkUploadDataFlowComponent
  ],
  imports: [
    CommonModule,
    BulkUploadDataFlowRoutingModule
  ]
})
export class BulkUploadDataFlowModule { }
