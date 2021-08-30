import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css']
})
export class GlobalErrorComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }

}
