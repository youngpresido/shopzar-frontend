import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './container/main/main/main.component';
import { DashboardComponent } from './container/pages/dashboard/dashboard/dashboard.component';
import { DashComponent } from './dash/dash.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: MainComponent,
    children:[
      { path:"dashboard", component: DashboardComponent },
      { path:"products",  loadChildren: () => import('./container/pages/products/products.module').then(m => m.ProductsModule) },
      { path:"orders",  loadChildren: () => import('./container/pages/order/order.module').then(m => m.OrderModule) },
      { path:"seller-review",  loadChildren: () => import('./container/pages/seller-review/seller-review.module').then(m => m.SellerReviewModule) },
      { path:"transactions",  loadChildren: () => import('./container/pages/transactions/transactions.module').then(m => m.TransactionsModule) },
      { path:"bulk-upload-products",  loadChildren: () => import('./container/pages/bulk-upload-products/bulk-upload-products.module').then(m => m.BulkUploadProductsModule) },
      { path:"bulk-upload-data-flow",  loadChildren: () => import('./container/pages/bulk-upload-data-flow/bulk-upload-data-flow.module').then(m => m.BulkUploadDataFlowModule) },
      { path:"shipments",  loadChildren: () => import('./container/pages/shipments/shipments.module').then(m => m.ShipmentsModule) },
      { path:"invoices",  loadChildren: () => import('./container/pages/invoices/invoices.module').then(m => m.InvoicesModule) },
      { path:"refunds",  loadChildren: () => import('./container/pages/refunds/refunds.module').then(m => m.RefundsModule) },
      { path:"attributes",  loadChildren: () => import('./container/attributes/attributes.module').then(m => m.AttributesModule) },
      { path:"categories",  loadChildren: () => import('./container/pages/categories/categories.module').then(m => m.CategoriesModule) },
      { path:"add-attribute",  loadChildren: () => import('./container/add-attributes/add-attributes.module').then(m => m.AddAttributesModule) },
      { path:"add-category",  loadChildren: () => import('./container/pages/add-category/add-category.module').then(m => m.AddCategoryModule) }

    ]
  },
  // {
  //   path: 'onboarding',
  //   loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingModule)
  // },
  { path: '**', redirectTo: 'market', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
