import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { NotificationClass } from '../../Notificaciones/notification-class';
import { NotificationServiceService } from '../../Notificaciones/notification-service.service';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  palabraEspanol = new Espanol();
  palabrasEspanolas: Espanol[] = [];


  miFormulario = new FormGroup({
    palabra: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });


  constructor(private notificaciones:NotificationServiceService,private router:Router, private DBService: DiccionarioServiceService, @Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<AddModalComponent>) { }

  ngOnInit(): void {
      this.palabrasEspanolas = this.data;
      console.log(this.palabrasEspanolas);
  }

  AddPalabra() {
    var Notificacion = new NotificationClass();
    Notificacion.titulo = "Añadido";
    Notificacion.descripcion = "Se ha añadido una nueva palabra";
    Notificacion.tipo = "Add";
    Notificacion.hora = "HORA";

    var palabra = this.palabraEspanol.palabra = this.miFormulario.get("palabra")?.value;
    this.palabraEspanol.descripcion = this.miFormulario.get("descripcion")?.value;

    if (this.palabrasEspanolas.includes(palabra)) {
        alert("Esa palabra ya existe en el diccionario.");
    }
    else {
      this.DBService.addEspanol(this.palabraEspanol).subscribe(
        res => {alert("Palabra " + palabra + " añadida correctamente."),
        this.notificaciones.addNotify(Notificacion)}
      );
      (error: any) => {
        console.log(error);
      }
      this.dialogRef.close();

      //location.reload();

    }

  }

}
