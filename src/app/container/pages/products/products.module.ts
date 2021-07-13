import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ComponentModule } from 'src/app/component/component.module';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';
// import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { OrderComponent } from '../order/order/order.component';
import { SellerReviewComponent } from '../seller-review/seller-review/seller-review.component';
import { SellersComponent } from '../sellers/sellers/sellers.component';
import { TransactionsComponent } from '../transactions/transactions/transactions.component';
import { BulkUploadDataFlowComponent } from '../bulk-upload-data-flow/bulk-upload-data-flow/bulk-upload-data-flow.component';
import { BulkUploadProductsComponent } from '../bulk-upload-products/bulk-upload-products/bulk-upload-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    // DashboardComponent,
    OrderComponent,
    SellersComponent,
    SellerReviewComponent,
    TransactionsComponent,
    BulkUploadDataFlowComponent,
    BulkUploadProductsComponent,


  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class ProductsModule { }
