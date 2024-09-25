import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckPermisosDirective } from '../../directives/check-permisos.directive';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CheckPermisosDirective, UpperCasePipe, DatePipe, TruncatePipe, FilterPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  usuarioConectado = { id: 1, nombre: "Usuario 1" }
  otroUsuario = { id: 2, nombre: "Usuario 2" }

  currentDate =  Date.now();

  listaMensajes: any[] = [
    {id: 1, texto: 'Mensaje 1: asdas asd asdas dasd as das d asd asd asd', autor: this.usuarioConectado, fecha: this.currentDate - 300000000},
    {id: 2, texto: 'Mensaje 2: qweqwe qwe qweqweq we qwe qw eq we qwe qwe', autor: this.otroUsuario, fecha: this.currentDate - 200000000},
    {id: 3, texto: 'Mensaje 3: vbnv bn vbn vbn vb nvb n vbn vbbnvbnvbn v ', autor: this.usuarioConectado, fecha: this.currentDate - 100000000},
    {id: 4, texto: 'Mensaje 4: tyutyuy ty u yt utyutyuty u tyuty ut yu tyu', autor: this.otroUsuario, fecha: this.currentDate}
  ]

  nuevoTexto = '';
  textoFiltro = '';

  enviar = () => {
    const nuevoId = Math.max.apply(Math, this.listaMensajes.map((m) =>  m.id )) + 1;
    const nuevoMensaje = {
      id: nuevoId,
      texto: this.nuevoTexto,
      autor: this.usuarioConectado,
      fecha: Date.now()
    }
    this.listaMensajes.push(nuevoMensaje);
    this.nuevoTexto = '';
  }

  borrar = (id: number) => {
    this.listaMensajes = this.listaMensajes.filter((m) => m.id !== id);
  };

}
