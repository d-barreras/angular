import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios = [
    { id: 1, nombre: "Usuario 1", telefono: "123", login: 'admin', password: 'admin', token: 'token_user_1' },
    { id: 2, nombre: "Usuario 2", telefono: "456", login: 'basic', password: 'basic', token: 'token_user_2' }
  ]

  token: any;
  usuarioConectado: any;
  otroUsuario = this.listaUsuarios[1];

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('userToken');
    this.usuarioConectado = this.listaUsuarios.find(u => u.token == this.token);
  }

  obtener = (id: any) => {
    return this.listaUsuarios.find(u => u.id == id);
  }

  obtenerListaApi = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  login = (user: string, password: string) => {
    const usuario = this.listaUsuarios.find(e => e.login == user && e.password == password);
    if (usuario) {
      localStorage.setItem('userToken', usuario.token);
      this.token = usuario.token;
      this.usuarioConectado = usuario;
      return true;
    }
    return false;
  }

  logout = () => {
    localStorage.removeItem('userToken');
    this.token = undefined;
  }

  hayUsuarioConectado = () => {
    return this.token != undefined;
  }

  getToken = () => {
    return this.token;
  }

}
