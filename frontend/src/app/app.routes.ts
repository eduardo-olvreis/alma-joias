import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { JoiaListaComponent } from './components/joia-lista/joia-lista';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "produtos/:categoria", component: JoiaListaComponent }
];
