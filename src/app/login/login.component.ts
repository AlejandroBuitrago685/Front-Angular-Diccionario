import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  miFormulario = new FormGroup({
    email: new FormControl("", Validators.required),
    pass: new FormControl('', Validators.required),
  });


  constructor(private serviceLogin: LoginService, private auth:AuthGuard) {}

  ngOnInit(): void {
  }

  Login(){
    var email = this.miFormulario.get("email")?.value;
    var pass = this.miFormulario.get("pass")?.value;
    this.serviceLogin.Loguear(email, pass);
  }

}
