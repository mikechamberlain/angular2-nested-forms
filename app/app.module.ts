import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {InnerComponent} from "./inner.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InnerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
