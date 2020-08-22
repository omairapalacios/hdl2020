import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { MentoresComponent } from './components/mentores/mentores.component';
import { MentorCardComponent } from './components/mentor-card/mentor-card.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { CardHomeComponent } from './components/card-home/card-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    MentoresComponent,
    MentorCardComponent,
    AboutmeComponent,
    CardHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
