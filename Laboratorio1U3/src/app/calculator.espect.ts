import { TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';

//primer caso de prueba para la funcion multiplicar
describe('Test for Calculator', () => {
    describe('Test for multiply', () => {
      it('should return nine', () => {
        // Arrange
        let calculator = new Calculator();
        //Act
        let result = calculator.multiply(3, 3);
        //Assert
        expect(result).toEqual(9);
      });

      it('should return nine', () => {
        // Arrange
        let calculator = new Calculator();
        //Act
        let result = calculator.multiply(2, 2);
        //Assert
        expect(result).toEqual(4);
      });

    });

});
