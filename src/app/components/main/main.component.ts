import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ComentariosService } from '../../services/comentarios.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, MensajeComponent, FilterPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  nuevoTexto = '';
  textoFiltro = '';
  listaMensajes : any[];

  private comentariosService = inject(ComentariosService);
  private usuariosService = inject(UsuariosService);

  constructor() {
    this.listaMensajes = this.comentariosService.listaMensajes;
  }

  enviar = () => {
    const nuevoId = Math.max.apply(Math, this.comentariosService.listaMensajes.map((m) =>  m.id )) + 1;
    const nuevoMensaje = {
      id: nuevoId,
      texto: this.nuevoTexto,
      autor: this.usuariosService.usuarioConectado,
      fecha: Date.now()
    }
    this.comentariosService.listaMensajes.push(nuevoMensaje);
    this.nuevoTexto = '';
  }

/*
  borrarEnPadre = (id: number) => {
    this.listaMensajes = this.listaMensajes.filter((m: any) => m.id !== id);
  };

  borrarEnPadre = (mensaje: any) => {
    this.listaMensajes = this.listaMensajes.filter((m: any) => m.id !== mensaje.id);
  };
*/

  borrarEnPadre = (mensaje: any) => {
    this.listaMensajes = this.comentariosService.borrar(mensaje);
  };

}
