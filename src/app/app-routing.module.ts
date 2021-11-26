import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

  {path:'', redirectTo:'usuarios', pathMatch:'full'},

  {path:'usuarios', component: UsuariosComponent},
  {path: 'cadastro-modal', component: CadastroModalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
