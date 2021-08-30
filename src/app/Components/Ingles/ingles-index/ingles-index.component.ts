import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { Espanol } from '../../Espanol/espanol';
import { UpdateModalEspanolComponent } from '../../Espanol/update-modal-espanol/update-modal-espanol.component';
import { AddEnglishComponent } from '../add-english/add-english.component';
import { Ingles } from '../ingles';

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

  constructor(private dialog:MatDialog, private DBService: DiccionarioServiceService) { }

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
    dialogConfig.data = palabra;
    this.dialog.open(UpdateModalEspanolComponent, dialogConfig);
    //console.log(palabra); 
  
   }



}
