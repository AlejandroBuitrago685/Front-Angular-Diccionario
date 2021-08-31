import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DiccionarioServiceService } from '../../../../diccionario-service.service';
import { AddModalComponent } from '../../../../Espanol/Infraestructure/Presentation/add-modal/add-modal.component';
import { Espanol } from '../../../../Espanol/Application/espanol';
import { Ingles } from '../../../Application/ingles';

@Component({
  selector: 'app-add-english',
  templateUrl: './add-english.component.html',
  styleUrls: ['./add-english.component.css']
})
export class AddEnglishComponent implements OnInit {

  palabraIngles = new Ingles();
  palabrasEspanolas: Espanol[] = [];
  palabrasInglesas: Ingles[] = [];


  miFormulario = new FormGroup({
    ingles: new FormControl('', Validators.required),
    espanol: new FormControl(this.data.palabraEsp, Validators.required),
  });


  constructor(private DBService: DiccionarioServiceService, private dialogRef: MatDialogRef<AddEnglishComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.palabrasEspanolas = this.data;
    console.log(this.palabrasEspanolas);

    this.DBService.ObtenerIngles().subscribe(
      p => this.palabrasInglesas = p
    )

    this.DBService.ObtenerEspanol().subscribe(
      p => this.palabrasEspanolas = p
    )
  }

  AddPalabra() {

    var palabrasDiccEspanol = [];
    var palabrasDiccIngles = [];


    //NO CREO QUE ESTOS BUCLES SEAN LO MÁS ÓPTIMO EN EL CASO DE QUE HAYAN 100000 REGISTROS,
    //PERO NO HE ENCONTRADO OTRA MANERA MÁS ÓPTIMA (Y HE INVESTIGADO BASTANTE).
    for (const i in this.palabrasEspanolas) {
      palabrasDiccEspanol.push(this.palabrasEspanolas[i].palabra)
    }

    for (const i in this.palabrasInglesas) {
      palabrasDiccIngles.push(this.palabrasInglesas[i].palabra)
    }

    //Comprobaciones antes de insertar
    if (palabrasDiccEspanol.includes(this.miFormulario.get("espanol")?.value)) {

      if (!palabrasDiccIngles.includes(this.miFormulario.get("ingles")?.value)) {

        var ingles = this.palabraIngles.palabra = this.miFormulario.get("ingles")?.value;
        this.palabraIngles.palabraEspanol = this.miFormulario.get("espanol")?.value;

        this.DBService.addIngles(this.palabraIngles).subscribe(
          res => alert("Palabra " + ingles + " añadida correctamente.")
        );
        (error: any) => {
          console.log(error);
        }

        this.dialogRef.close();

        location.reload();

      }

      else {
        alert("Esta palabra ya existe en este diccionario.")
      }

    }
    else {
      var confirmacion = confirm("La palabra no existe en el diccionario Español. \n\n¿Desea añadirla al diccionario Español?");
      if (confirmacion) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {palabra: this.miFormulario.get("espanol")?.value} 
        this.dialog.open(AddModalComponent, dialogConfig);
      }

    }

  }

}
