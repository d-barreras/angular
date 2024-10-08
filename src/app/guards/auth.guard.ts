import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  if (inject(UsuariosService).hayUsuarioConectado()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
