import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market/market.component';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';
import { ComponentModule } from 'src/app/component/component.module';


@NgModule({
  declarations: [MarketComponent],
  imports: [
    CommonModule,
    MarketRoutingModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class MarketModule { }
