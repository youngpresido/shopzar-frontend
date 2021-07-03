import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { ComponentModule } from 'src/app/component/component.module';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';


@NgModule({
  declarations: [
    // OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class OrderModule { }
