import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';


const routes: Routes = [
  {
    path: '',
    component: MarketComponent,
    children: [
      { path: '', redirectTo: '/market', pathMatch: 'full' },
      // {
      //   path: 'portal/profiling',
      //   loadChildren: () =>
      //   import('./portal.module').then((m) => m.PortalModule)
      // },
      // {
      //   path: 'profiling',
      //   loadChildren: () =>
      //   import('./profiling/profiling.module').then((m) => m.ProfilingModule)
      // },
      // {
      //   path: 'request',
      //   loadChildren: () =>
      //   import('./request/request.module').then((m) => m.RequestModule)
      // },
      // {
      //   path: 'bulk-statement',
      //   loadChildren: () =>
      //   import('./bulk-statement/bulk-statement.module').then((m)=> m.BulkStatementModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
