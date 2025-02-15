// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PracticaComponent } from './practica.component';

// describe('PracticaComponent', () => {
//   let component: PracticaComponent;
//   let fixture: ComponentFixture<PracticaComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [PracticaComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PracticaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { PracticaComponent } from './practica.component';
// import { By } from '@angular/platform-browser';

// describe('PracticaComponent', () => {
//   let component: PracticaComponent;
//   let fixture: ComponentFixture<PracticaComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [PracticaComponent]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PracticaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // 1. Verificar que el campo input de texto tiene el valor esperado
//   it('debería verificar que el input de texto contiene "Angular Testing"', () => {
//     const inputElement = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
//     inputElement.value = 'Angular Testing';
//     inputElement.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(inputElement.value).toEqual('Angular Testing');
//   });

//   // 2. Verificar que el campo input de número es menor que 100
//   it('debería verificar que el valor del input de número es menor que 100', () => {
//     const inputElement = fixture.debugElement.query(By.css('input[type="number"]')).nativeElement;
//     inputElement.value = '50';
//     inputElement.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(Number(inputElement.value)).toBeLessThan(100);
//   });

//   // 3. Verificar que el contenido de la textArea contiene la frase requerida
//   it('debería contener la frase "Universidad de las Fuerzas Armadas ESPE" en la textArea', () => {
//     const textAreaElement = fixture.debugElement.query(By.css('textarea')).nativeElement;
//     textAreaElement.value = 'Bienvenidos a la Universidad de las Fuerzas Armadas ESPE';
//     textAreaElement.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     expect(textAreaElement.value).toMatch(/Universidad de las Fuerzas Armadas ESPE/);
//   });

//   // 4. Verificar que la función dado retorna verdadero si el número es par
//   it('debería retornar verdadero si el número es par', () => {
//     spyOn(component, 'dado').and.callFake(() => 4 % 2 === 0);
//     expect(component.dado()).toBeTruthy();
//   });

//   // 5. Verificar que el título h1 contiene la palabra ITIN
//   it('debería contener la palabra ITIN en el título h1', () => {
//     const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement;
//     h1Element.textContent = 'Bienvenido a ITIN';
//     fixture.detectChanges();
//     expect(h1Element.textContent).toContain('ITIN');
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticaComponent } from './practica.component';
import { FormsModule } from '@angular/forms';

describe('PracticaComponent', () => {
  let component: PracticaComponent;
  let fixture: ComponentFixture<PracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticaComponent, FormsModule] // Importar FormsModule
    }).compileComponents();

    fixture = TestBed.createComponent(PracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1️ Evaluar si el h1 dentro de una clase "destacado" contiene "EUR-ACE"
  it('debería contener "EUR-ACE" en el h1 dentro de la clase destacado', () => {
    const destacadoElement = fixture.nativeElement.querySelector('.destacado h1 span');
    expect(destacadoElement.textContent).toEqual('EUR-ACE');
  });

  // 2️ Evaluar si el valor de input de tipo number es >= 5
  it('debería tener un valor mayor o igual a 5 en el input de número', () => {
    component.numeroInput = 5;
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input[type="number"]');
    expect(Number(inputElement.value)).toBeGreaterThanOrEqual(5);
  });

  // 3️ Evaluar si el textarea contiene la frase "Resultado de aprendizaje"
  it('debería coincidir con la frase "Resultado de aprendizaje" en el textarea', () => {
    component.textoArea = 'Este es el Resultado de aprendizaje esperado';
    fixture.detectChanges();
    const textareaElement = fixture.nativeElement.querySelector('textarea');
    expect(textareaElement.value).toMatch(/Resultado de aprendizaje/);
  });

  // 4️ Evaluar si la función "dado()" retorna true cuando genera un número impar
  it('debería retornar true si el número es impar', () => {
    spyOn(Math, 'random').and.returnValue(0.3); // Simula un 1 (impar)
    expect(component.dado()).toBeTruthy();
  });

  // 5️ Evaluar si el input de tipo texto contiene "Angular Testing"
  it('debería contener "Angular Testing" en el input de texto', () => {
    component.textoInput = 'Angular Testing';
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input[type="text"]');
    expect(inputElement.value).toContain('Angular Testing');
  });

});
