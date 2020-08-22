import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { MentoresComponent } from './components/mentores/mentores.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

const routes: Routes = [
  { path: 'home', component: CarruselComponent },
  { path: 'mentores', component: MentoresComponent },
  { path: 'aboutme', component: AboutmeComponent },
/*   { path: 'seasons', component: SeasonsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'search/:text', component: SearchComponent }, */
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
