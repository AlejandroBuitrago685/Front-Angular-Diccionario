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
export class InglesResolver implements Resolve<Observable<any>> {
  
  constructor(private DbService: DiccionarioServiceService, private route:Router){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.DbService.ObtenerEspanol().pipe(
      delay(3000),
      catchError(error => {
          alert("Ha ocurrido un error inesperado")
          console.log(error)
          return of()
      })
    );
  }
}
