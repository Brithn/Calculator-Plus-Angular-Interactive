import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent {
  titulo: string = 'Actividad del Día';
  actividades: string[] = ['Correr', 'Saltar', 'Leer'];
  actividadSeleccionada: string | null = null;

  iniciarActividad(): void {
    this.actividadSeleccionada = this.actividades[Math.floor(Math.random() * this.actividades.length)];
  }
}
