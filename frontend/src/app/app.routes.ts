import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { JoiaListaComponent } from './components/joia-lista/joia-lista';
import { JoiaDetalheComponent } from './components/joia-detalhe/joia-detalhe';
import { JoiaFormComponent } from './components/joia-form/joia-form';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "produtos/:categoria", component: JoiaListaComponent },
  { path: "produtos/detalhe/:id", component: JoiaDetalheComponent },
  
  { path: "admin/cadastro", component: JoiaFormComponent}
];
