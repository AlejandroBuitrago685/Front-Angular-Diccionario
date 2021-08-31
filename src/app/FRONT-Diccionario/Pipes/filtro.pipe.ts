import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FiltroEspanolPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultCards = [];
    for(const card of value){
      if(card.palabra.indexOf(arg) > -1){
        resultCards.push(card);
      };
    };
    return resultCards;
  }

}