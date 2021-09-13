import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/FRONT-Diccionario/Auth/Services/user';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  static usuarios: User[] = [];

  miFormulario = new FormGroup({
    email: new FormControl("", Validators.required),
    pass: new FormControl('', Validators.required),
    passrepeat: new FormControl('', Validators.required)
  });

  constructor(private dialogRef: MatDialogRef<RegisterModalComponent>) { }

  ngOnInit(): void {
  }

  AddUser(){

    if(this.miFormulario.get("pass")?.value == this.miFormulario.get("passrepeat")?.value){
      var email=this.miFormulario.get("email")?.value;
      var pass=this.miFormulario.get("pass")?.value;
      var Usuario = new User(email, pass);
      RegisterModalComponent.usuarios.push(Usuario);

      console.log(RegisterModalComponent.usuarios);

      alert("Usuario creado correctamente");
      this.dialogRef.close();
    }
    else{
      alert("Las contraseñas introducidas no coinciden");
    }

  }

}
