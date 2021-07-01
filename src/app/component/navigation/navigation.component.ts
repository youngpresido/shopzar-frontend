import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

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
        title: 'chinwe',
        name: 'Apple',
        path: 'Fruit',

    },
    {
      title: 'chinwe',
      name: 'Apple',
      path: 'Fruit',

  },
  {
    title: 'chinwe',
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
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
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

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
