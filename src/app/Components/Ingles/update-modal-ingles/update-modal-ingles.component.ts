import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { Espanol } from '../../Espanol/espanol';
import { Ingles } from '../ingles';

@Component({
  selector: 'app-update-modal-ingles',
  templateUrl: './update-modal-ingles.component.html',
  styleUrls: ['./update-modal-ingles.component.css']
})
export class UpdateModalInglesComponent implements OnInit {

  ingles = new Ingles();
  palabrasEspanolas: Espanol[] = [];

  miFormulario = new FormGroup({
    palabraIngles: new FormControl(this.data.palabraIngles, Validators.required),
    palabraEspanol: new FormControl(this.data.palabraEspanol, Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private DBService: DiccionarioServiceService, private dialogRef: MatDialogRef<UpdateModalInglesComponent>) { }

  ngOnInit(): void {

    this.DBService.ObtenerEspanol().subscribe(
      p => this.palabrasEspanolas = p
    );
    (error: any) => {
      console.log(error);
    }

  }

  EditPalabra() {

    var palabraIngles = this.ingles.palabra = this.miFormulario.get('palabraIngles')?.value;
    this.ingles.palabraEspanol = this.miFormulario.get('palabraEspanol')?.value;

    var palabrasESP = [];

    for (const i in this.palabrasEspanolas) {
      palabrasESP.push(this.palabrasEspanolas[i].palabra);
    }


    if(!palabrasESP.includes(this.miFormulario.get('palabraEspanol')?.value)){
      alert("Esa traducción no existe en el diccionario español.")
    }
    else {

      this.DBService.updateIngles(this.data.palabraIngles, this.ingles).subscribe(
        res => alert("Palabra actualizada correctamente.")
      );
      (error: any) => {
        console.log(error);
      }
  
      this.dialogRef.close();
  
      location.reload();

    }

  }

}
