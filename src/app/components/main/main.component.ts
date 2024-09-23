import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  listaTareas = [
    {'id': 0, 'titulo': 'Tarea 1'},
    {'id': 1, 'titulo': 'Tarea 2'},
    {'id': 2, 'titulo': 'Tarea 3'},
  ]

  listaTareas2: any[] = []
  
  nombre = 'javier';
  edad = 15;

  incrementar = () => {
    this.edad++;
  }

}
