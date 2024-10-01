import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { inject } from '@angular/core';

export const RoleGuard: (requiredRole: string) => CanActivateFn = (requiredRole) => {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(UsuariosService).usuarioConectado.login === requiredRole;
  };
};