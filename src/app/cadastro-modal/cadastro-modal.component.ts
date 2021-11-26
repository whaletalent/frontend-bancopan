import { JsonpClientBackend } from '@angular/common/http';
import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../model/usuariosModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.css']
})
export class CadastroModalComponent implements OnInit {


  usuarios: Usuarios = new Usuarios();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

 
  ngOnInit(){ 


    //Armazenar dados
    localStorage.setItem("nome", this.usuarios.name);
    localStorage.setItem("cpf", JSON.stringify(this.usuarios.cpf));
    localStorage.setItem("email", this.usuarios.email);
    localStorage.setItem("phone", JSON.stringify(this.usuarios.phone))



  }



  cadastrar(){
    this.usuarios.name 
    console.log(this.usuarios)
    this.authService.cadastrar(this.usuarios).subscribe((resp: Usuarios) => {
      this.usuarios = resp
      this.router.navigate(['/usuarios'])
      alert("Usuário cadastrado com Sucesso")
    })

  }

}
