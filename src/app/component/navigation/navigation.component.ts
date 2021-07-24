import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  path: string;
  title?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [







  {
    name: 'Fruit',
    path: 'Fruit',
    children: [
      {
        name: 'Apple',
        path: 'Fruit',

    },
    {
      name: 'Apple',
      path: 'Fruit',

  },
  {
    name: 'Apple',
    path: 'Fruit',

},
    ]
  },
  {
    name: 'Fruit',
    path: 'Fruit',
    children: [
      {
        name: 'Apple',
        path: 'Fruit',

    },
    {
      name: 'Apple',
      path: 'Fruit',

  },
  {
    name: 'Apple',
    path: 'Fruit',

},
    ]
  },
  {
    name: 'Fruit',
    path: 'Fruit',
    children: [
      {
        name: 'Apple',
        path: 'Fruit',

    },
    {
      name: 'Apple',
      path: 'Fruit',

  },
  {
    name: 'Apple',
    path: 'Fruit',

},
    ]
  },
  {
    name: 'Fruit',
    path: 'Fruit',
    children: [
      {
        name: 'Apple',
        path: 'Fruit',

    },
    {
      name: 'Apple',
      path: 'Fruit',

  },
  {
    name: 'Apple',
    path: 'Fruit',

},
    ]
  },

  {
    name: 'Vegetables',
    path: 'Fruit',
    children: [
      {
        name: 'Fruit',
        path: 'Fruit',
        children: [
          {
            name: 'Apple',
            path: 'Fruit',

        },
        {
          name: 'Apple',
          path: 'Fruit',

      },
      {
        name: 'Apple',
        path: 'Fruit',

    },
        ]
      }, {
        name: 'Fruit',
        path: 'Fruit',
        children: [
          {
            name: 'Apple',
            path: 'Fruit',

        },
        {
          name: 'Apple',
          path: 'Fruit',

      },
      {
        name: 'Apple',
        path: 'Fruit',

    },
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss', './navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  nav_items = [

      {
        "name":"Dropship managers",
        "id": 2,
        "url":"/orders",
        "isOpen": false,
        "icon":"next_week",
        "children":[
          {
            "name":"Dropship managers",
            "url":"/orders",
          }
        ]
      },
      {
        "name":"Market Place",
        "id": 3,
        "url":"/orders",
        "isOpen": false,
        "icon":"assignment",
        "children":[]
      },
      {
        "name":"Sales",
        "id": 4,
        "url":"/orders",
        "isOpen": false,
        "icon":"multiline_chart",
        "children":[]
      },
      {
        "name":"Catalog",
        "id": 5,
        "url":"/orders",
        "isOpen": false,
        "icon":"event_note",
        "children":[]
      },
      {
        "name":"Customers",
        "id": 6,
        "url":"/orders",
        "isOpen": false,
        "icon":"group",
        "children":[]
      },
      {
        "name":"Velocity",
        "id": 7,
        "url":"/orders",
        "isOpen": false,
        "icon":"show_chart",
        "children":[]
      },
      {
        "name":"Promotions",
        "id": 8,
        "url":"/orders",
        "isOpen": false,
        "icon":"flight_takeoff",
        "children":[]
      },
      {
        "name":"CMS",
        "id": 9,
        "url":"/orders",
        "icon":"list",
        "isOpen": false,
        "children":[]
      },
      {
        "name":"Settings",
        "id": 10,
        "url":"/orders",
        "isOpen": false,
        "icon":"settings",
        "children":[]
      },
      {
        "name":"STRIPE",
        "id": 11,
        "url":"/orders",
        "icon":"list_add",
        "isOpen": false,
        "children":[]
      },
      {
        "name":"Tenants",
        "id": 12,
        "url":"/orders",
        "isOpen": false,
        "icon":"launch",
        "children":[]
      },
      {
        "name":"Progressive web app",
        "id": 13,
        "url":"/orders",
        "icon":"mobile_screen_share",
        "isOpen": false,
        "children":[]
      },
      {
        "name":"Configure",
        "id": 14,
        "url":"/orders",
        "isOpen": false,
        "icon":"live_help",
        "children":[]
      }
  ]
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
