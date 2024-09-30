import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { inject } from '@angular/core';

export const LoginGuard: CanActivateFn = (route, state) => {
  if (inject(UsuariosService).hayUsuarioConectado()) {
    inject(Router).navigate(['/']);
    return false;
  } else {
    return true;
  }
};
