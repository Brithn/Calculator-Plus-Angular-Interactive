import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadComponent } from './actividad.component';
import { By } from '@angular/platform-browser';

describe('ActividadComponent', () => {
  let component: ActividadComponent;
  let fixture: ComponentFixture<ActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1. Verificar si el título del componente se renderiza correctamente
  it('debería mostrar el título en un h1', () => {
    component.titulo = 'Prueba de Actividad';
    fixture.detectChanges();
    const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Element.textContent).toContain('Prueba de Actividad');
  });

  // 2. Verificar si el botón se renderiza con el texto correcto
  it('debería mostrar un botón con el texto "Iniciar"', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent).toContain('Iniciar');
  });

  // 3. Comprobar que una lista de actividades se renderiza correctamente
  it('debería mostrar una lista con elementos de actividad', () => {
    component.actividades = ['Correr', 'Saltar', 'Leer'];
    fixture.detectChanges();
    const listItems = fixture.debugElement.queryAll(By.css('li'));
    expect(listItems.length).toBe(3);
    expect(listItems[0].nativeElement.textContent).toContain('Correr');
  });

  // 4. Verificar que se llama a la función cuando se hace clic en el botón
  it('debería llamar a la función iniciarActividad cuando se haga clic en el botón', () => {
    spyOn(component, 'iniciarActividad');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.iniciarActividad).toHaveBeenCalled();
  });

  // 5. Verificar que un párrafo aparece si hay una actividad seleccionada
  it('debería mostrar un párrafo con la actividad seleccionada', () => {
    component.actividadSeleccionada = 'Estudiar Angular';
    fixture.detectChanges();
    const pElement = fixture.debugElement.query(By.css('p'));
    expect(pElement).toBeTruthy();
    expect(pElement.nativeElement.textContent).toContain('Estudiar Angular');
  });
});
