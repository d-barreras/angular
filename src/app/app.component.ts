import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'portal';
  formValid = true;
  label1 = 'test1';

  nombre = '123';

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  clickBoton = () => {
    console.log("click")
  }

  teclaPulsada = (ev: KeyboardEvent) => {
    console.log(`La tecla es: ${ev.key}`);
  }

  mostrarValor = () => {
    console.log(this.nombre);
  }

}
