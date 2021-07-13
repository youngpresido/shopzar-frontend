import { Component, OnInit, ViewChild } from '@angular/core';

// for map

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexPlotOptions,
  ApexFill
} from "ng-apexcharts";

import { series } from "./data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  subtitle: ApexTitleSubtitle;
};

// For Table
export interface PeriodicElement {
  name: string;
  icon: string;
  weight: number;
  symbol: string;
}

interface Transaction {
  item: string;
  cost: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {icon: 'face', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {icon: 'face', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {icon: 'face', name: 'Lithium', weight: 6.941, symbol: 'Li'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss','./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // For Map
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // For Table
  displayedColumns: string[] = ['icon', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 300,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
   }

  ngOnInit(): void {
  }

}
