import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../model/usuariosModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<any>;



  constructor(
    private router: Router,
    public auth: AuthService,
    
  ) { }

  ngOnInit(){
    this.listar();
    }

    listar(){
      this.auth.listar().subscribe(dados => this.usuarios = dados);

    }

  
  }

  

