import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { HomeComponent } from './components/home/home';
import { JoiaListaComponent } from './components/joia-lista/joia-lista';
import { JoiaDetalheComponent } from './components/joia-detalhe/joia-detalhe';
import { JoiaFormComponent } from './components/joia-form/joia-form';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "produtos/:categoria", component: JoiaListaComponent },
  { path: "produtos/detalhe/:id", component: JoiaDetalheComponent },
  
  /* Rotas de Admin */
  { path: "admin/cadastro", component: JoiaFormComponent, canActivate: [authGuard]},
  { path: "admin/editar/:id", component: JoiaFormComponent, canActivate: [authGuard]},
  { path: "logar", component: LoginComponent}
];
