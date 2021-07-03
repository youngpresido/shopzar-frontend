import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './container/main/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children:[
      { path:"dashboard",  loadChildren: () => import('./container/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path:"products",  loadChildren: () => import('./container/pages/products/products.module').then(m => m.ProductsModule) },
      { path:"orders",  loadChildren: () => import('./container/pages/order/order.module').then(m => m.OrderModule) }
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
