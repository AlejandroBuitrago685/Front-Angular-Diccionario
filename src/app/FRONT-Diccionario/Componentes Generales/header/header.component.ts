import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Auth/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado:boolean = false;
  session = sessionStorage.getItem("login");

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.logueado = this.loginService.logueado
    
  }


  CerrarSesion() {
    if (this.loginService.logueado == true) {
      this.logueado = false;
      sessionStorage.removeItem("login");
      location.reload();
    }
  }
}
