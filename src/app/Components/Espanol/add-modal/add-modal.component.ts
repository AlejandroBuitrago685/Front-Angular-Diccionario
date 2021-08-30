import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { NotificationServiceService } from '../../Notificaciones/notification-service.service';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  miFormulario = new FormGroup({
    palabra: new FormControl(this.data.palabra, Validators.required),
    descripcion: new FormControl('', Validators.required),
  });

  constructor(private notificaciones: NotificationServiceService, private router: Router, private DBService: DiccionarioServiceService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddModalComponent>) { }

  palabraEspanol = new Espanol();
  palabrasEspanolas: Espanol[] = [];

  ngOnInit(): void {
    this.palabrasEspanolas = this.data;
    console.log(this.palabrasEspanolas);
  }


  AddPalabra() {

    var palabrasDiccEspanol = [];
    var palabraDesdeIngles: string = this.data.palabra;

    console.log(typeof palabraDesdeIngles)

    //NO CREO QUE ESTE BUCLE SEA LO MÁS ÓPTIMO EN EL CASO DE QUE HAYAN 100000 REGISTROS,
    //PERO NO HE ENCONTRADO OTRA MANERA MÁS ÓPTIMA (Y HE INVESTIGADO BASTANTE).

    for (const i in this.palabrasEspanolas) {
      palabrasDiccEspanol.push(this.palabrasEspanolas[i].palabra)
    }

    if (palabrasDiccEspanol.includes(this.miFormulario.get("palabra")?.value)) {
      alert("Esa palabra ya existe en el diccionario.");
    }
    else {

      var palabra = this.palabraEspanol.palabra = this.miFormulario.get("palabra")?.value;
      this.palabraEspanol.descripcion = this.miFormulario.get("descripcion")?.value;

      this.DBService.addEspanol(this.palabraEspanol).subscribe(
        res => {alert("Palabra " + palabra + " añadida correctamente.")}
      );
      (error: any) => {
        console.log(error);
      }

      this.dialogRef.close();

      location.reload();

    }

  }

}
