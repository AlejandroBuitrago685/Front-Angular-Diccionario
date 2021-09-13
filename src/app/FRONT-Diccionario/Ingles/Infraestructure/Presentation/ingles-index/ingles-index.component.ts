import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiccionarioServiceService } from '../../../../Componentes Generales/Services/diccionario-service.service';
import { Espanol } from '../../../../Espanol/Application/espanol';
import { AddEnglishComponent } from '../add-english/add-english.component';
import { Ingles } from '../../../Application/ingles';
import { UpdateModalInglesComponent } from '../update-modal-ingles/update-modal-ingles.component';

@Component({
  selector: 'app-ingles-index',
  templateUrl: './ingles-index.component.html',
  styleUrls: ['./ingles-index.component.css']
})
export class InglesIndexComponent implements OnInit, OnDestroy {

  ObtenerDatosIngles : Subscription;
  ObtenerDatosEspanol : Subscription;

  palabrasInglesas: Ingles[] = [];
  palabrasEspanolas: Espanol[] = [];
  filtercards = "";

  constructor(private dialog:MatDialog, private DBService: DiccionarioServiceService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.ObtenerDatosIngles = this.DBService.ObtenerIngles().subscribe(
      p => this.palabrasInglesas = p
    );
    (error:any) => {
      console.log(error);
    }

    this.ObtenerDatosEspanol = this.DBService.ObtenerEspanol().subscribe(
      p => this.palabrasEspanolas = p
    );
    (error:any) => {
      console.log(error);
    }
    
  }

  ngOnDestroy(): void {
    this.ObtenerDatosIngles.unsubscribe();
    this.ObtenerDatosEspanol.unsubscribe();
  }

  openDialog(){
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.palabrasEspanolas;
    this.dialog.open(AddEnglishComponent, dialogConfig);

  }

  EliminarPalabra(palabra: string) {
    var confirmacion = confirm("¿Está seguro de que quiere borrar esta palabra?");
  
    if (confirmacion) {
  
      this.DBService.deleteIngles(palabra).subscribe(
        resp => {
          this.palabrasInglesas = this.palabrasInglesas.filter(p => p.palabra != palabra);
        }
      );
      (error: any) => {
        console.log(error);
      }
  
    }
    else {
      console.log("Se ha cancelado el borrado.");
    }
  
  }
  
  Borrar(palabra: Ingles) {
    //console.log(palabra); 
    let DeletPalabra = palabra.palabra;
    this.EliminarPalabra(DeletPalabra);
   }
  
  
   EditarPalabra(palabra: Ingles) {
    
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {palabraEspanol: palabra.palabraEspanol};
    this.dialog.open(UpdateModalInglesComponent, dialogConfig);
    //console.log(palabra); 
  
   }

   DeleteAll() {

    var confirmacion = confirm("¿Está seguro de que quiere borrar todos los datos de los diccionarios? \n\nEsto será IRREVERSIBLE.");

    if (confirmacion) {
      this.DBService.deleteAllEspanol().subscribe(
        resp => console.log("Sucess")
      );
      (error: any) => {
        console.log(error);
      }
    }

  }

}
