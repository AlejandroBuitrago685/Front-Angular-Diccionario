import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolIndexComponent } from './FRONT-Diccionario/Espanol/Infraestructure/Presentation/espanol-index/espanol-index.component';
import { InglesIndexComponent } from './FRONT-Diccionario/Ingles/Infraestructure/Presentation/ingles-index/ingles-index.component';
import { GlobalErrorComponent } from './FRONT-Diccionario/ErrorHandling/global-error/global-error.component';
import { EspanolResolver } from './FRONT-Diccionario/Espanol/Infraestructure/Resolvers/espanol.resolver';
import { InglesResolver } from './FRONT-Diccionario/Ingles/Infraestructure/Resolvers/ingles.resolver';
import { IndexComponent } from './FRONT-Diccionario/Componentes Generales/index/index.component';

const routes: Routes = [
  { path: '', component:  IndexComponent},
  { path: 'ingles', component:  InglesIndexComponent, resolve:{diccEng: InglesResolver}},
  { path: 'espanol', component:  EspanolIndexComponent, resolve:{diccEsp: EspanolResolver}},
  { path: 'error/:error', component:  GlobalErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
