import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolIndexComponent } from './FRONT-Diccionario/Espanol/Infraestructure/Presentation/espanol-index/espanol-index.component';
import { InglesIndexComponent } from './FRONT-Diccionario/Ingles/Infraestructure/Presentation/ingles-index/ingles-index.component';
import { GlobalErrorComponent } from './FRONT-Diccionario/ErrorHandling/global-error/global-error.component';
import { EspanolResolver } from './FRONT-Diccionario/Espanol/Infraestructure/Resolvers/espanol.resolver';
import { InglesResolver } from './FRONT-Diccionario/Ingles/Infraestructure/Resolvers/ingles.resolver';
import { IndexComponent } from './FRONT-Diccionario/Componentes Generales/index/index.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component:  IndexComponent},
  { path: 'ingles', component:  InglesIndexComponent, resolve:{diccEng: InglesResolver}, canActivate:[AuthGuard]},
  { path: 'espanol', component:  EspanolIndexComponent, resolve:{diccEsp: EspanolResolver}, canActivate:[AuthGuard]},
  { path: 'error/:error', component:  GlobalErrorComponent},
  { path: 'login', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
