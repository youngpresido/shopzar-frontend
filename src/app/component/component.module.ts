import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from '../utilities/material-ui.module';



@NgModule({
  declarations: [
    NavigationComponent,
    MainToolbarComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    MainToolbarComponent,
    UserDetailsComponent
  ]
})
export class ComponentModule { }
