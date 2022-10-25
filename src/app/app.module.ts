import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LabelsComponent } from './labels/labels.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeProgramsComponent } from './home-programs/home-programs.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { HomeContactformComponent } from './home-contactform/home-contactform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    LabelsComponent,
    HomeHeaderComponent,
    HomeServicesComponent,
    HomeProgramsComponent,
    HomeAboutComponent,
    HomeTeamComponent,
    HomeContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
