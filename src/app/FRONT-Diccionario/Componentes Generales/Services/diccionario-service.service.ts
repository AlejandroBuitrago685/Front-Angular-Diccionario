import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Espanol } from '../../Espanol/Application/espanol';
import { Ingles } from '../../Ingles/Application/ingles';

@Injectable({
  providedIn: 'root'
})
export class DiccionarioServiceService {

  RutaDB = environment.DBlUrl;

  constructor( private http:HttpClient) {}


  //Obtener palabras en espanol
  ObtenerEspanol():Observable<Espanol[]>{
    return this.http.get<Espanol[]>(this.RutaDB + "/espanol");
  }

  //Obtener palabras en ingles
  ObtenerIngles():Observable<Ingles[]>{
    return this.http.get<Ingles[]>(this.RutaDB + "/ingles");
  }

  //Crear nueva palabra en espanol
  addEspanol(palabra:Espanol):Observable<Espanol>{
    return this.http.post<Espanol>(this.RutaDB + "/espanol" ,palabra);
  }

  //Crear nueva palabra en ingles
  addIngles(palabra:Ingles):Observable<Ingles>{
    return this.http.post<Ingles>(this.RutaDB + "/ingles" ,palabra);
  }

  //Obtener una única palabra espanol
  getEspanol(palabra:string):Observable<Espanol>{
    return this.http.get<Espanol>(this.RutaDB + "/espanol/"  + palabra);
  }

  //Obtener una única palabra ingles
  getIngles(palabra:string):Observable<Ingles>{
    return this.http.get<Ingles>(this.RutaDB + "/ingles/"  + palabra);
  }

  //Borrar espanol
  deleteEspanol(palabra:string):Observable<Espanol>{
    return this.http.delete<Espanol>(this.RutaDB + '/espanol/' + palabra);
  }

  //Borrar Ingles
  deleteIngles(palabra:string):Observable<Ingles>{
    return this.http.delete<Ingles>(this.RutaDB + '/ingles/' + palabra);
  }

  //Actualizar Espanol
  updateEspanol(palabra:string, contenido:Espanol):Observable<Espanol>{
    return this.http.put<Espanol>(this.RutaDB + "/espanol/" + palabra, contenido);
  }

  //Actualizar Ingles
  updateIngles(palabra:string, contenido:Ingles):Observable<Ingles>{
    return this.http.put<Ingles>(this.RutaDB + "/ingles/" + palabra, contenido);
  }

  //Borrar todo Español
  deleteAllEspanol():Observable<Espanol>{
    return this.http.delete<Espanol>(this.RutaDB + '/espanol/');
  }

}
