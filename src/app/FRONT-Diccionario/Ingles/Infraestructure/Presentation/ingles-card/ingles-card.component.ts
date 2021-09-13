import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { DiccionarioServiceService } from '../../../../Componentes Generales/Services/diccionario-service.service';
import { Ingles } from '../../../Application/ingles';

@Component({
  selector: 'app-ingles-card',
  templateUrl: './ingles-card.component.html',
  styleUrls: ['./ingles-card.component.css']
})
export class InglesCardComponent implements OnInit {


  @Input()
  ingles: Ingles = new Ingles();

  @Output()
  edit: EventEmitter<Ingles> = new EventEmitter<Ingles>();

  @Output()
  delete: EventEmitter<Ingles> = new EventEmitter<Ingles>();
  

  constructor(private DBService:DiccionarioServiceService) { }

  ngOnInit(): void {
    var AltaFormateada = moment(this.ingles.fechaAlta).format('MM/DD/YYYY kk:mm');
    var ModFormateada = moment(this.ingles.fechaModificacion).format('MM/DD/YYYY kk:mm');
    

    this.ingles.fechaAlta = AltaFormateada;

    if (this.ingles.fechaModificacion === null) {
      this.ingles.fechaModificacion = "Aún no se ha modificado.";
    }
    else {
      this.ingles.fechaModificacion = ModFormateada;
    }

  }

}
