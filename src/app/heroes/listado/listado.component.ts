import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = [
    'spiderman',
    'Ironman',
    'Hulk',
    'Capitan America',
    'Linterna Verde',
  ];
  heroeBorrado: string = '';
  ultimoElemento() {
    return this.heroes[this.heroes.length - 1];
  }
  get cant() {
    return this.heroes.length;
  }
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
