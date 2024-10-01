import { HttpInterceptorFn } from '@angular/common/http';
import { UsuariosService } from '../services/usuarios.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  // Añadir el token a la solicitud
  const token = inject(UsuariosService).getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
