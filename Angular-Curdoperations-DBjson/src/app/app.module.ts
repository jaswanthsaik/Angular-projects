import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { DataListComponent } from './data-list/data-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupFormComponent,
    DataListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
