import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AuthGuard } from '../../Guards/auth.guard';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { LoginService } from '../Services/login.service';
import { User } from '../Services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuarios: User[] = [];

  miFormulario = new FormGroup({
    email: new FormControl("", Validators.required),
    pass: new FormControl('', Validators.required),
  });

  constructor(private serviceLogin: LoginService, private auth:AuthGuard, private dialog: MatDialog) {}

  ngOnInit(): void {

    this.serviceLogin.get().subscribe(
      p => this.Usuarios = p
    );
    (error:any) => {
      console.log(error);
    }
  }

  Login(){

    var emails = [];
    var passwords = [];

    var email = this.miFormulario.get("email")?.value;
    var pass = this.miFormulario.get("pass")?.value;

    for (const i in this.Usuarios) {
      emails.push(this.Usuarios[i].email);
      passwords.push(this.Usuarios[i].password);
    }

    if(emails.includes(email) && passwords.includes(pass)){
      this.serviceLogin.Loguear();
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
function jQuery(arg0: string) {
  throw new Error('Function not implemented.');
}

