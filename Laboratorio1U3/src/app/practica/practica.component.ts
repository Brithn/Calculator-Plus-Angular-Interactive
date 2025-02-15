import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {
  // textoInput: string = '';
  // numeroInput: number = 0;
  // textoArea: string = '';

  // dado(): boolean {
  //   const numero = Math.floor(Math.random() * 10) + 1;
  //   return numero % 2 === 0;
  // }
  textoInput: string = '';
  numeroInput: number = 0;
  textoArea: string = '';

  // Función para generar un número aleatorio del 1 al 6
  dado(): boolean {
    const numero = Math.floor(Math.random() * 6) + 1;
    return numero % 2 !== 0; // Retorna true si es impar, false si es par
  }
}
