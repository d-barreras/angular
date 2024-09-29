import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckPermisosDirective } from '../../directives/check-permisos.directive';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { UsuariosService } from '../../services/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CheckPermisosDirective, UpperCasePipe, DatePipe, TruncatePipe, RouterLink],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {

  @Input({ required: true }) mensaje: any;

  //@Output() usuarioBorradoEnHijo = new EventEmitter<any>();
  //@Output() usuarioBorradoEnHijo = new EventEmitter<number>();
  //@Output() usuarioBorradoEnHijo = new EventEmitter<any>();
  @Output() usuarioBorradoEnHijo = new EventEmitter<any>();

  usuarioConectado: any;

  constructor(private usuariosService: UsuariosService) {
    this.usuarioConectado = this.usuariosService.usuarioConectado;
  }

  borrarUsuarioEnHijo = () => {
    //this.usuarioBorradoEnHijo.emit();
    //this.usuarioBorradoEnHijo.emit(this.mensaje.id);
    //this.usuarioBorradoEnHijo.emit({id: this.mensaje.id});
    this.usuarioBorradoEnHijo.emit(this.mensaje);
  }

}
