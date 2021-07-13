import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentModule } from 'src/app/component/component.module';
import { MaterialUiModule } from 'src/app/utilities/material-ui.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from 'src/app/component/bar-chart/bar-chart.component';
import { TableComponent } from 'src/app/component/table/table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialUiModule,
    ComponentModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
