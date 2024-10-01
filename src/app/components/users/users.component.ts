import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  usuariosService = inject(UsuariosService);

  usuarios: any;

  constructor() {
    this.usuariosService.obtenerListaApi().subscribe(
      response => this.usuarios = response
    )
  }
}
