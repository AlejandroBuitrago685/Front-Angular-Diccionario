import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as moment from 'moment';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { AddEnglishComponent } from '../../Ingles/add-english/add-english.component';
import { Ingles } from '../../Ingles/ingles';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-espanol-card',
  templateUrl: './espanol-card.component.html',
  styleUrls: ['./espanol-card.component.css']
})
export class EspanolCardComponent implements OnInit {
  

  ingles: Ingles = new Ingles();

  @Input()
  espanol: Espanol = new Espanol();

  @Output()
  edit: EventEmitter<Espanol> = new EventEmitter<Espanol>();

  @Output()
  delete: EventEmitter<Espanol> = new EventEmitter<Espanol>();
  

  constructor(private DBService:DiccionarioServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {

    var AltaFormateada = moment(this.espanol.fechaAlta).format('DD/MM/YYYY kk:mm');
    var ModFormateada = moment(this.espanol.fechaModificacion).format('DD/MM/YYYY kk:mm');
    

    this.espanol.fechaAlta = AltaFormateada;

    if (this.espanol.fechaModificacion === null) {
      this.espanol.fechaModificacion = "Aún no se ha modificado.";
    }
    else {
      this.espanol.fechaModificacion = ModFormateada;
    }

  }

  CrearTraduccion(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {palabraEsp: this.espanol.palabra}
    this.dialog.open(AddEnglishComponent, dialogConfig);
  }

}

