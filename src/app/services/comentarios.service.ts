import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  currentDate =  Date.now();

  listaMensajes: any[] = [];

  constructor(private usuariosService: UsuariosService, private http: HttpClient) {
    this.listaMensajes = [
      {id: 1, texto: 'Mensaje 1: asdas asd asdas dasd as das d asd asd asd', autor: this.usuariosService.usuarioConectado, fecha: this.currentDate - 300000000},
      {id: 2, texto: 'Mensaje 2: qweqwe qwe qweqweq we qwe qw eq we qwe qwe', autor: this.usuariosService.otroUsuario, fecha: this.currentDate - 200000000},
      {id: 3, texto: 'Mensaje 3: vbnv bn vbn vbn vb nvb n vbn vbbnvbnvbn v ', autor: this.usuariosService.usuarioConectado, fecha: this.currentDate - 100000000},
      {id: 4, texto: 'Mensaje 4: tyutyuy ty u yt utyutyuty u tyuty ut yu tyu', autor: this.usuariosService.otroUsuario, fecha: this.currentDate}
    ]
  }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  insertar(mensaje: any) {
    this.listaMensajes.push(mensaje);
  }

  borrar(mensaje: any) {
    this.listaMensajes = this.listaMensajes.filter((m: any) => m.id !== mensaje.id);
    return this.listaMensajes;
  }

}
