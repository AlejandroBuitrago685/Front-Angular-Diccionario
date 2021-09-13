import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  emailOK = "usuario@gmail.com";
  passOK = "1234";
  logueado = false;
  static logueado: boolean;

  Loguear(email:string, pass:string){

    if(email == this.emailOK && pass == this.passOK){
      //console.log("LOGUEADO CORRECTAMENTE");
      sessionStorage.setItem("login", "true");
      this.logueado = true;
      this.router.navigate(["/"]);
    }
    else{
      //console.log("ERROR DE CREDENCIALES");
      this.logueado = false;
      alert("Correo o contraseña incorrectos");
    }

  }

  constructor(private router:Router) { }
}
