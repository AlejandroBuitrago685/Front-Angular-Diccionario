import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AuthGuard } from '../../Guards/auth.guard';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { LoginService } from '../Services/login.service';

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


  constructor(private serviceLogin: LoginService, private auth:AuthGuard, private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  Login(){

    var emails = [];
    var passwords = [];

    var email = this.miFormulario.get("email")?.value;
    var pass = this.miFormulario.get("pass")?.value;

    for (const i in RegisterModalComponent.usuarios) {
      emails.push(RegisterModalComponent.usuarios[i].email);
      passwords.push(RegisterModalComponent.usuarios[i].password);
    }

    if(emails.includes(email) && passwords.includes(pass)){
      this.serviceLogin.Loguear(email, pass);
    }
    
    else{
      Swal.fire({
        icon: 'error',
        title: 'Usuario o contraseña incorrectos.'
    })
    }
    
  }


  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegisterModalComponent, dialogConfig);
  }

}
