import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
  import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { ReportComponent } from './reports/reports.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
// import { CustomerComponent } from './customer/customer.component';
import { SaiComponent } from './sai/sai.component';
import { SignupComponent } from './signup/signup.component';
// import { EmployeeListComponent } from './employee-list-component/employee-list-component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'forms', component: FormsComponent },
  { path: 'table', component: TableComponent },
  {path: 'signup', component: SignupComponent },
  { path: 'reports', component: ReportComponent },
  // { path: 'customer', component: CustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sai', component: SaiComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/login' }
  // { path: 'jashu', component: EmployeeListComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    FormsComponent,
    ReportComponent,
    SideMenuComponent,
    AboutComponent,
    // CustomerComponent,
    SaiComponent,
    SignupComponent,
    // EmployeeListComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
