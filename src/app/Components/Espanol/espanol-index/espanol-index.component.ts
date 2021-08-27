import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DiccionarioServiceService } from '../../diccionario-service.service';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Espanol } from '../espanol';

@Component({
  selector: 'app-espanol-index',
  templateUrl: './espanol-index.component.html',
  styleUrls: ['./espanol-index.component.css']
})
export class EspanolIndexComponent implements OnInit {

  palabrasEspanolas: Espanol[] = [];

  constructor(private dialog:MatDialog, private DBService: DiccionarioServiceService) { }

  ngOnInit(): void {

    this.DBService.ObtenerEspanol().subscribe(
      res => this.palabrasEspanolas = res
    );
    (error:any) => {
      console.log(error);
    }

  }


  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddModalComponent, dialogConfig);
}

}
