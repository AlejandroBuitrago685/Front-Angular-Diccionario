import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.loading = true;
      }

      else if(event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError){
        this.loading = false;
      }
    })

  }

}
