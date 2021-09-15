import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/FRONT-Diccionario/Auth/Services/user';
import Swal from 'sweetalert2';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  Usuarios: User[] = [];

  miFormulario = new FormGroup({
    email: new FormControl("", Validators.required),
    pass: new FormControl('', Validators.required),
    passrepeat: new FormControl('', Validators.required)
  });

  constructor(private dialogRef: MatDialogRef<RegisterModalComponent>, private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.get().subscribe(
      p => this.Usuarios = p
    );
    (error: any) => {
      console.log(error);
    }

  }

  AddUser() {

    var emails = [];

    if (this.miFormulario.get("pass")?.value == this.miFormulario.get("passrepeat")?.value) {
      var email = this.miFormulario.get("email")?.value;
      var pass = this.miFormulario.get("pass")?.value;
      var Usuario = new User(email, pass);

      for (const i in this.Usuarios) {
        emails.push(this.Usuarios[i].email);
      }

      if (!emails.includes(email)) {
        this.loginService.add(Usuario).subscribe(
          res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario creado correctamente',
              showConfirmButton: false,
              timer: 1500
            }),
            this.dialogRef.close();
          }
        );
        (error: any) => {
          console.log(error);
        }
      }

      else {

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ya existe un usuario con el email ' + email,
          showConfirmButton: false,
          timer: 2000
        })

      }
    }
    else {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        showConfirmButton: false,
        timer: 1500
      })

    }

  }

}
