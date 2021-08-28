import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-update-modal-espanol',
  templateUrl: './update-modal-espanol.component.html',
  styleUrls: ['./update-modal-espanol.component.css']
})
export class UpdateModalEspanolComponent implements OnInit {

  espanol = new Espanol();

  miFormulario = new FormGroup({
    palabra: new FormControl(this.data.palabra, Validators.required),
    descripcion: new FormControl(this.data.descripcion, Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private DBService:DiccionarioServiceService) { }

  ngOnInit(): void {
  }

  EditPalabra(){
   
    var palabra = this.espanol.palabra = this.miFormulario.get('palabra')?.value;
    this.espanol.descripcion = this.miFormulario.get('descripcion')?.value;
  
    this.DBService.updateEspanol(palabra, this.espanol).subscribe(
      res => alert("Palabra actualizado correctamente.")
    );
    (error:any) => {
      console.log(error);
    }

  }
  

}
