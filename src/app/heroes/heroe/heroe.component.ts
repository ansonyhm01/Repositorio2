import { Component } from '@angular/core';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 25;
  obtenerNombre(): string {
    return `nombre es: ${this.nombre} y la edad: ${this.edad}`;
  }
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad += 1;
  }
}
