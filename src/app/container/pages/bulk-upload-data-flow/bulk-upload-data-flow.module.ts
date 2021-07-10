import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkUploadDataFlowRoutingModule } from './bulk-upload-data-flow-routing.module';
import { BulkUploadDataFlowComponent } from './bulk-upload-data-flow/bulk-upload-data-flow.component';
import { ComponentModule } from 'src/app/component/component.module';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';


@NgModule({
  declarations: [
    // BulkUploadDataFlowComponent
  ],
  imports: [
    CommonModule,
    BulkUploadDataFlowRoutingModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class BulkUploadDataFlowModule { }
