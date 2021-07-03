import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../order/order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // {
  //   path: '', component: ProductsComponent,
  // },
  // {
  //   path: 'order', component: OrderComponent,
  // },
  // // {
  // //   path: '', component: ProductsComponent,
  // // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
