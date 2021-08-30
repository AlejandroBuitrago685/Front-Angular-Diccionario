import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DiccionarioServiceService } from '../Components/diccionario-service.service';

@Injectable({
  providedIn: 'root'
})
export class EspanolResolver implements Resolve<Observable<any>> {

constructor(private DbService: DiccionarioServiceService){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.DbService.ObtenerEspanol().pipe(
      catchError(error => {
          alert("Ha ocurrido un error inesperado")
          console.log(error)
          return of()
      })
    );
  }
}
