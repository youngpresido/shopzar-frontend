import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellersRoutingModule } from './sellers-routing.module';
import { SellersComponent } from './sellers/sellers.component';


@NgModule({
  declarations: [
    // SellersComponent
  ],
  imports: [
    CommonModule,
    SellersRoutingModule
  ]
})
export class SellersModule { }
