import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {

  usuario: any;
  
  constructor(private route: ActivatedRoute, private usuariosService: UsuariosService) { }

  ngOnInit() {
    const idUsuario = this.route.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuario = this.usuariosService.obtener(idUsuario);
    }
  }

}
