import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { filter } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showHeader = false;

  constructor(private router: Router, private usuariosService: UsuariosService, private http: HttpClient) {
    console.log("Inicio AppComponent");
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.showHeader = !this.router.url.includes('/login');
      });
  }

  irAPaginaUsuarios = (id: any) => this.router.navigate(['/user-info', id]);

  logout = () => {
    this.usuariosService.logout();
    this.router.navigate(['/login'])
  }

  obtenerDatos() {
    this.http.get('/api/datos').subscribe(datos => {
      console.log(datos);
    });
  }


}
