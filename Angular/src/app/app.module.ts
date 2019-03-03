import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from  '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { PatentsComponent } from './patents/patents.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PatentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
