import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios = [
    { id: 1, nombre: "Usuario 1", telefono: "123" },
    { id: 2, nombre: "Usuario 2", telefono: "456" }
  ]

  usuarioConectado = this.listaUsuarios[0];
  otroUsuario = this.listaUsuarios[1];

  constructor() { }

  obtener = (id: any) => {
    return this.listaUsuarios.find(u => u.id == id);
  }
}
