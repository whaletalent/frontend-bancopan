import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuariosModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuariosUrl = 'https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users' ;

  constructor(
    private http: HttpClient
  ) { }

  listar(){
    return this.http.get<any[]>(`${this.usuariosUrl}`);
  }


  getAllUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>('https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users')
  }

  cadastrar(usuarios: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>('https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users', usuarios)
  }

}


