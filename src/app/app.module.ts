import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './utilities/material-ui.module';
import { ComponentModule } from './component/component.module';
import { CommonModule } from '@angular/common';
import { MainModule } from './container/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
