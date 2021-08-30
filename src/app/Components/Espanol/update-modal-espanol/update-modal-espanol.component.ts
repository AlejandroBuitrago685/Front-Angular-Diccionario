import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-update-modal-espanol',
  templateUrl: './update-modal-espanol.component.html',
  styleUrls: ['./update-modal-espanol.component.css']
})
export class UpdateModalEspanolComponent implements OnInit{

  espanol = new Espanol();

  miFormulario = new FormGroup({
    palabra: new FormControl(this.data.palabra, Validators.required),
    descripcion: new FormControl(this.data.descripcion, Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private DBService:DiccionarioServiceService, private dialogRef: MatDialogRef<UpdateModalEspanolComponent>) { }

  ngOnInit(): void {
  }


  EditPalabra(){
   
    this.espanol.palabra = this.miFormulario.get('palabra')?.value;
    this.espanol.descripcion = this.miFormulario.get('descripcion')?.value;
  
    this.DBService.updateEspanol(this.data.palabra, this.espanol).subscribe(
      res => alert("Palabra actualizada correctamente.")
    );
    (error:any) => {
      console.log(error);
    }

    this.dialogRef.close();

    location.reload();

  }
  

}
