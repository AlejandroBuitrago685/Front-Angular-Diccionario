import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolIndexComponent } from './Components/Espanol/espanol-index/espanol-index.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component:  IndexComponent},
  { path: 'ingles', component:  EspanolIndexComponent},
  { path: 'espanol', component:  EspanolIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
