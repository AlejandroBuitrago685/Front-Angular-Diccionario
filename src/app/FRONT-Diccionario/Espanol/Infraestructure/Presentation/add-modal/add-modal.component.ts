import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Ingles } from 'src/app/FRONT-Diccionario/Ingles/Application/ingles';
import { DiccionarioServiceService } from '../../../../Componentes Generales/Services/diccionario-service.service';
import { Espanol } from '../../../Application/espanol';

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

  constructor(private router: Router, private DBService: DiccionarioServiceService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddModalComponent>) { }

  palabraEspanol = new Espanol();
  //palabraIngles = new Ingles();
  palabrasEspanolas: Espanol[] = [];

  ngOnInit(): void {
    this.palabrasEspanolas = this.data.palabrasEspanolas;
    //console.log(this.palabrasEspanolas);
    
  }


  AddPalabra() {

    var palabrasDiccEspanol = [];
    //var palabraDesdeIngles: string = this.data.palabra;

    //this.palabraIngles.palabra = this.data.palabraIngles;
    //this.palabraIngles.palabraEspanol = this.data.palabra;

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
        res => { alert("Palabra " + palabra + " añadida correctamente.") }
      );
      (error: any) => {
        console.log(error);
      }
     

    //ESTO FUNCIONA CUANDO QUIERE
    /*if(this.data.palabraIngles === null || this.data.palabraIngles === undefined || this.data.palabra === null || this.data.palabra === undefined){


    } else {
      console.log("ESTO ES EL IF")

      this.DBService.addIngles(this.palabraIngles).subscribe(
        res => console.log("Sucess")
      );
      (error: any) => {
        console.log(error);
      }
    }*/
       
      this.dialogRef.close();

      location.reload();

    }

  }

}
