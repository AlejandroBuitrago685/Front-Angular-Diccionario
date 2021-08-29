import { Injectable } from '@angular/core';
import { NotificationClass } from './notification-class';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  nNotificaciones = parseInt(localStorage.getItem("notificaciones") || "0");
  totalnotificaciones = this.nNotificaciones.toString();
  contador = localStorage.setItem("notificaciones",this.totalnotificaciones);
  notificaciones:NotificationClass[] = [];

  constructor() { }

  addNotify(notificacion:NotificationClass) {
    this.nNotificaciones++;
    this.notificaciones.push(notificacion);
    console.log(this.notificaciones);
    localStorage.setItem("Historial",this.notificaciones.toString())
  }

  deleteNotify(notificacion:NotificationClass){
    this.nNotificaciones--;
    this.notificaciones.splice(0,1,notificacion);
    console.log(this.notificaciones);
  }

  deleteAllNotifies(){
    this.notificaciones = [];
  }

}
