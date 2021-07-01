import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ComponentModule } from 'src/app/component/component.module';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class ProductsModule { }
