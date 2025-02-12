import { TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';



describe('Test for Calculator', () => {
  //Arrange
  let calculator: any;
  beforeEach(() => {
    calculator = new Calculator();
  });



    describe('Test for multiply', () => {
      it('should return nine', () => {
        // Arrange

        //Act
        //Assert
        expect(calculator.multiply(3, 3)).toEqual(9);
      });

      it('should return four', () => {
        // Arrange

        //Act
        //Assert
        expect(calculator.multiply(2, 2)).toEqual(4);
      });
      it('should return five', () => {
        // Arrange

        //Act
        //Assert
        expect(calculator.divide(25, 5)).toEqual(5);
      });

      it('should return zero', () => {
        // Arrange

        //Act
        //Assert
        expect(calculator.divide(81, 0)).toBeNull;
      });
    });

});
