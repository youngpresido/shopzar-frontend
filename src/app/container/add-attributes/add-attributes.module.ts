import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAttributesRoutingModule } from './add-attributes-routing.module';
import { AddAttributesComponent } from './add-attributes/add-attributes.component';


@NgModule({
  declarations: [
    AddAttributesComponent
  ],
  imports: [
    CommonModule,
    AddAttributesRoutingModule
  ]
})
export class AddAttributesModule { }
