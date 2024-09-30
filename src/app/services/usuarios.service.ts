import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios = [
    { id: 1, nombre: "Usuario 1", telefono: "123", login: 'admin', password: 'admin', token: 'token_user_1' },
    { id: 2, nombre: "Usuario 2", telefono: "456", login: 'basic', password: 'basic', token: 'token_user_2' }
  ]

  usuarioConectado: any;
  otroUsuario = this.listaUsuarios[1];

  constructor() {
    this.usuarioConectado = localStorage.getItem('userToken');
  }

  obtener = (id: any) => {
    return this.listaUsuarios.find(u => u.id == id);
  }

  login = (user: string, password: string) => {
    const usuario = this.listaUsuarios.find(e => e.login == user && e.password == password);
    if (usuario) {
      localStorage.setItem('userToken', usuario.token);
      this.usuarioConectado = usuario.token;
      return true;
    }
    return false;
  }

  logout = () => {
    localStorage.removeItem('userToken');
    this.usuarioConectado = undefined;
  }

  hayUsuarioConectado = () => {
    return this.usuarioConectado != undefined;
  }
}
