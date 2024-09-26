import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioConectado = { id: 1, nombre: "Usuario 1" }
  otroUsuario = { id: 2, nombre: "Usuario 2" }

  constructor() { }

}
