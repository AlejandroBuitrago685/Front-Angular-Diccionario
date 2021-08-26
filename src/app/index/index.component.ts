import { Component, OnInit } from '@angular/core';
import { DiccionarioServiceService } from '../Components/diccionario-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private DBService:DiccionarioServiceService) { }

  ngOnInit(): void {

    this.DBService.ObtenerEspanol().subscribe(
      p => console.log(p)
    );
    (error:any) => {
      console.log(error);
    }

    this.DBService.ObtenerIngles().subscribe(
      p => console.log(p)
    );
    (error:any) => {
      console.log(error);
    }

  }

}
