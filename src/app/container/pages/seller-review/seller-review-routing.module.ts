import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerReviewComponent } from './seller-review/seller-review.component';

const routes: Routes = [
  {
    path: '',
    component: SellerReviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerReviewRoutingModule { }
