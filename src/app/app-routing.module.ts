import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolIndexComponent } from './Components/Espanol/espanol-index/espanol-index.component';
import { InglesIndexComponent } from './Components/Ingles/ingles-index/ingles-index.component';
import { GlobalErrorComponent } from './ErrorHandling/global-error/global-error.component';
import { IndexComponent } from './index/index.component';
import { EspanolResolver } from './Resolvers/espanol.resolver';
import { InglesResolver } from './Resolvers/ingles.resolver';

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
