import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logueado = false;
  static logueado: boolean;

  Loguear(email:string, pass:string){

      //console.log("LOGUEADO CORRECTAMENTE");
      this.logueado = true;
      this.router.navigate(["/"]);
  
  }

  constructor(private router:Router) { }
}
