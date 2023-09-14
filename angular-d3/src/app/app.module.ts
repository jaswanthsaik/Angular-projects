import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { ChartComponent } from './chart/chart.component';
import { PractiseComponent } from './practise/practise.component';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    ChartComponent,
    PractiseComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    NgxGaugeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
