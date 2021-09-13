import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../../Auth/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado:boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.logueado = this.loginService.logueado
    
  }


  CerrarSesion() {
    if (this.loginService.logueado == true) {
      this.logueado = false;
      location.reload();
    }
  }
}
