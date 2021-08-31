import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiccionarioServiceService } from '../../../../diccionario-service.service';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Espanol } from '../../../Application/espanol';
import { UpdateModalEspanolComponent } from '../update-modal-espanol/update-modal-espanol.component';

@Component({
  selector: 'app-espanol-index',
  templateUrl: './espanol-index.component.html',
  styleUrls: ['./espanol-index.component.css']
})
export class EspanolIndexComponent implements OnInit, OnDestroy {

  ObternerDatosEspanol: Subscription;

  palabrasEspanolas: Espanol[] = [];
  filtercards = "";

  constructor(private dialog: MatDialog, private DBService: DiccionarioServiceService, private ac: ActivatedRoute) { }


  ngOnInit(): void {


    this.ObternerDatosEspanol = this.DBService.ObtenerEspanol().subscribe(
      res => this.palabrasEspanolas = res
    );
    (error: any) => {
      console.log(error);
    }

    //console.log(localStorage.getItem("Historial"));

  }

  ngOnDestroy(): void {
    this.ObternerDatosEspanol.unsubscribe();
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.palabrasEspanolas;
    this.dialog.open(AddModalComponent, dialogConfig);
  }

  EliminarPalabraEspanola(palabraEspanol: string) {
    var confirmacion = confirm("¿Está seguro de que quiere borrar esta palabra?");

    if (confirmacion) {

      this.DBService.deleteEspanol(palabraEspanol).subscribe(
        resp => {
          this.palabrasEspanolas = this.palabrasEspanolas.filter(p => p.palabra != palabraEspanol)
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

  Borrar(palabraEspanol: Espanol) {

    var TraduccionIngles = [];
    let DeletePalabraEspanol = palabraEspanol.palabra
    let DeletePalabraIngles = palabraEspanol.palabrasIngles;


    //Eliminar todas las palabras en Inglés relaccionadas antes de borrar la española
    for (const i in DeletePalabraIngles) {
      TraduccionIngles.push(DeletePalabraIngles[i].palabra)
    }


    for (var i of TraduccionIngles) {
      this.DBService.deleteIngles(i).subscribe(
        resp => {
          console.log("Borrado Ingles");
        }
      );
      (error: any) => {
        console.log(error);
      }

    }
    
    this.EliminarPalabraEspanola(DeletePalabraEspanol);

  }


  EditarPalabra(palabra: Espanol) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = palabra;
    this.dialog.open(UpdateModalEspanolComponent, dialogConfig);
    //console.log(palabra); 

  }



}
