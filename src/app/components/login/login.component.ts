import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private usuariosService = inject(UsuariosService);
  private router = inject(Router);

  login = '';
  password = '';

  conectar() {
    if (this.usuariosService.login(this.login, this.password)) {
      this.router.navigate(['']);
    }
  }

}
