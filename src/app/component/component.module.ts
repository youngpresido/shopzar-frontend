import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from '../utilities/material-ui.module';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    NavigationComponent,
    MainToolbarComponent,
    UserDetailsComponent,
    TestComponent
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
    UserDetailsComponent,
    TestComponent
  ]
})
export class ComponentModule { }
