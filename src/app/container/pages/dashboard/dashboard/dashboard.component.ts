import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  icon: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {icon: 'face', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {icon: 'face', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {icon: 'face', name: 'Lithium', weight: 6.941, symbol: 'Li'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }

}
