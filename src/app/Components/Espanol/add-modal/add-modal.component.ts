import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  palabraEspanol = new Espanol(); 

  miFormulario = new FormGroup({
    palabra: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });


  constructor( private DBService:DiccionarioServiceService) { }

  ngOnInit(): void {

  }

  AddPalabra(){

    var palabra = this.palabraEspanol.palabra = this.miFormulario.get("palabra")?.value;
    this.palabraEspanol.descripcion = this.miFormulario.get("descripcion")?.value;

    this.DBService.addEspanol(this.palabraEspanol).subscribe(
      res => alert("Palabra " + palabra + " añadida correctamente.")
    );
    (error:any) => {
      console.log(error);
    }
  }

}
