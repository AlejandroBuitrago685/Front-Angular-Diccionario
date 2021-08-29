import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiccionarioServiceService } from '../../diccionario-service.service';

@Component({
  selector: 'app-notifications-component',
  templateUrl: './notifications-component.component.html',
  styleUrls: ['./notifications-component.component.css']
})
export class NotificationsComponentComponent implements OnInit {

  nNotificaciones = "";

  constructor(private DBService : DiccionarioServiceService,private  router:Router) { }

  ngOnInit(): void {
    //console.log(this.nNotificaciones);
    this.nNotificaciones = localStorage.getItem("notificaciones") || "0";

  }

}
