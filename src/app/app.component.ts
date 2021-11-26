import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { Usuarios } from './model/usuariosModel';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  constructor(public auth: AuthService) { }




}



