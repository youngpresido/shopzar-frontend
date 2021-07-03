import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./container/pages/products/products.module').then(m => m.ProductsModule)
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
