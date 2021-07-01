import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentModule } from 'src/app/component/component.module';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';


@NgModule({
  declarations: [
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialUiModule,
    ComponentModule
  ]
})
export class DashboardModule { }
