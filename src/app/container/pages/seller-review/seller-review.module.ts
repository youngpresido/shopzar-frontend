import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerReviewRoutingModule } from './seller-review-routing.module';
import { SellerReviewComponent } from './seller-review/seller-review.component';


@NgModule({
  declarations: [
    // SellerReviewComponent
  ],
  imports: [
    CommonModule,
    SellerReviewRoutingModule
  ]
})
export class SellerReviewModule { }
