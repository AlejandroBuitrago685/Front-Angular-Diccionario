import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEnglishComponent } from '../add-english/add-english.component';

@Component({
  selector: 'app-ingles-index',
  templateUrl: './ingles-index.component.html',
  styleUrls: ['./ingles-index.component.css']
})
export class InglesIndexComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddEnglishComponent, dialogConfig);

  }

}
