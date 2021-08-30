import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiccionarioServiceService } from '../Components/diccionario-service.service';
import { Espanol } from '../Components/Espanol/espanol';
import { Ingles } from '../Components/Ingles/ingles';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  palabrasEspanolas: Espanol[] = [];
  palabrasIngles: Ingles[] = [];
  hablantesIng: number = 0;
  hispanoHablantes: number = 0;
  totales: number = 249000;

  hablantesESP: any = setInterval(() => {
    this.hispanoHablantes++;
    if (this.hispanoHablantes == 534) {
      clearInterval(this.hablantesESP);
    }
  }, 10)

  hablantesIngleses: any = setInterval(() => {
    this.hablantesIng++;
    if (this.hablantesIng == 1132) {
      clearInterval(this.hablantesIngleses);
    }
  }, 10)

  totalstop: any = setInterval(() => {
    this.totales++;
    if (this.totales == 250392) {
      clearInterval(this.totalstop);
    }
  }, 10)

}
