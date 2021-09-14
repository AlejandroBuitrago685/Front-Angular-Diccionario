import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logueado = false;
  static logueado: boolean;

  RutaJson =environment.JSONUrl;

  Loguear(){

      //console.log("LOGUEADO CORRECTAMENTE");
      this.logueado = true;
      this.router.navigate(["/"]);
      sessionStorage.setItem("login", "true");
  }

  add(usuario:User):Observable<User>{
    return this.http.post<User>(this.RutaJson + "/usuarios",usuario);
  }

  get():Observable<User[]>{
    return this.http.get<User[]>(this.RutaJson + "/usuarios");
  }

  constructor(private router:Router, private http:HttpClient) { }
}
