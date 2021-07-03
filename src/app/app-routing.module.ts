import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './container/pages/order/order/order.component';
import { ProductsComponent } from './container/pages/products/products/products.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products', component: ProductsComponent,
    children:[
      {
        path: '', component: ProductsComponent,
      },
      {
        path: 'order', component: OrderComponent,
      },
    ]
  },


  // { path: '**', redirectTo: 'market', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
