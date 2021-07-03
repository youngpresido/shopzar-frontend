import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';
import { ComponentModule } from 'src/app/component/component.module';
import { ProductsComponent } from '../pages/products/products/products.component';
import { DashboardComponent } from '../pages/dashboard/dashboard/dashboard.component';
import { OrderComponent } from '../pages/order/order/order.component';
import { SellersComponent } from '../pages/sellers/sellers/sellers.component';
import { SellerReviewComponent } from '../pages/seller-review/seller-review/seller-review.component';
import { TransactionsComponent } from '../pages/transactions/transactions/transactions.component';
import { BulkUploadDataFlowComponent } from '../pages/bulk-upload-data-flow/bulk-upload-data-flow/bulk-upload-data-flow.component';
import { BulkUploadProductsComponent } from '../pages/bulk-upload-products/bulk-upload-products/bulk-upload-products.component';


@NgModule({
  declarations: [
    MainComponent,
    // ProductsComponent,
    // DashboardComponent,
    // OrderComponent,
    // SellersComponent,
    // SellerReviewComponent,
    // TransactionsComponent,
    // BulkUploadDataFlowComponent,
    // BulkUploadProductsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class MainModule { }
