import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { Ingles } from '../ingles';

@Component({
  selector: 'app-add-english',
  templateUrl: './add-english.component.html',
  styleUrls: ['./add-english.component.css']
})
export class AddEnglishComponent implements OnInit {

  palabraIngles = new Ingles(); 

  miFormulario = new FormGroup({
    ingles: new FormControl('', Validators.required),
    espanol: new FormControl('', Validators.required),
  });


  constructor( private DBService:DiccionarioServiceService, private dialogRef: MatDialogRef<AddEnglishComponent>) { }

  ngOnInit(): void {
  }

  AddPalabra(){

    var ingles = this.palabraIngles.palabra = this.miFormulario.get("ingles")?.value;
    this.palabraIngles.palabraEspanol = this.miFormulario.get("espanol")?.value;

    this.DBService.addIngles(this.palabraIngles).subscribe(
      res => alert("Palabra " + ingles + " añadida correctamente.")
    );
    (error:any) => {
      console.log(error);
    }

    this.dialogRef.close();
  }

}
