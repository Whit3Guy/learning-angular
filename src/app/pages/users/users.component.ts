import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

    this.initializeForm();
  }

  SubmitForms(){

    if(this.userForm.valid){

      this.usuarios.push(this.userForm.value)
    }

    else{
      console.log("usuario invalido")
    }
  }

  //The name field must have a maximum of 250 characters


  initializeForm(){

    this.userForm = this.fb.group({
      nome:[
        '',
        [
          Validators.required,
           Validators.maxLength(250)
        ]
      ],

      idade:[
        '',
        [
          Validators.required,
           Validators.min(12),
            Validators.max(110)
        ]
      ]
    });
  }

  usuarios: User[] = 
  [
    {
      nome:"Julio",
      idade: 45
    },
    {
      nome:"Carianni",
      idade: 42
    },
    {
      nome:"Mauricião",
      idade: 52
    },
    {
      nome:"Igor Guedes",
      idade: 24
    },
  ]
InfoUserSelecionado(user: User){
  console.log(user)
}



}
