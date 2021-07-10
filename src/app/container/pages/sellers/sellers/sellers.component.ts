import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
  add: string;
  icons: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: 'active', add: 'create', icons: 'delete'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: 'active', add: 'create', icons: 'delete'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: 'active', add: 'create', icons: 'delete'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'active', add: 'create', icons: 'delete'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status: 'active', add: 'create', icons: 'delete'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: 'active', add: 'create', icons: 'delete'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'active', add: 'create', icons: 'delete'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status: 'active', add: 'create', icons: 'delete'},
];

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'product', 'status', 'icons'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
