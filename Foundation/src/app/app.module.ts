import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonationsComponent } from './donations/donations.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FounderComponent } from './founder/founder.component';
import { DirectorsComponent } from './directors/directors.component';
import { StaffComponent } from './staff/staff.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { SuppotersComponent } from './suppoters/suppoters.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Donations', component: DonationsComponent },
  { path: 'Equipment', component: EquipmentComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Founder', component: FounderComponent },
  { path: 'Directors', component: DirectorsComponent },
  { path: 'Staff', component: StaffComponent },
  { path: 'Volunteers', component: VolunteersComponent },
  { path: 'Suppoters', component: SuppotersComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProjectsComponent,
    DonationsComponent,
    EquipmentComponent,
    ContactComponent,
    DashboardComponent,
    FounderComponent,
    DirectorsComponent,
    StaffComponent,
    VolunteersComponent,
    SuppotersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
