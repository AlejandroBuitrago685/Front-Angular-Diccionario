import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { DiccionarioServiceService } from 'src/app/FRONT-Diccionario/Componentes Generales/Services/diccionario-service.service';

@Injectable({
  providedIn: 'root'
})
export class EspanolResolver implements Resolve<Observable<any>> {

constructor(private DbService: DiccionarioServiceService){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.DbService.ObtenerEspanol().pipe(
      delay(1500),
      catchError(error => {
          alert("Ha ocurrido un error inesperado")
          console.log(error)
          return of()
      })
    );
  }
}
