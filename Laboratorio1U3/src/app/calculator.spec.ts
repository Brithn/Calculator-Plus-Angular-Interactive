import { Calculator } from './calculator';

//primer caso de prueba para la funcion multiplicar
describe('Test for Calculator', () => {
  let calculator:any;
  beforeEach(()=>{
    let calculator = new Calculator();

  });
    describe('Test for multiply', () => {
      it('should return nine', () => {
        // Arrangea
        let calculator = new Calculator();
        expect(calculator.multiply(3, 3)).toEqual(9);
      });

      it('should return nine', () => {
        // Arrange
        let calculator = new Calculator();
        expect(calculator.multiply(2, 2)).toEqual(4);
      });

      it('should return nine', () => {
        // Arrange
        let calculator = new Calculator();
        expect(calculator.divide(20, 5)).toEqual(4);
      });

      it('should return nine', () => {
        // Arrange
        let calculator = new Calculator();
        //Act
        //Assert
        // expect(result).toEqual(4);
        expect(calculator.divide(20, 0)).toBeNull;

      });

      //refactorizar la variable result

      //d. Probar los matcher de Jasmine (se puede ver en su página oficial)
      describe('Jasmine Matchers', () => {
        fit('test Matchers', () => {
         let name = 'Dayana';
         let name1;

         expect(name).toBeDefined();
         expect(name1).toBeUndefined();

         expect(1+2== 3).toBeTruthy();
         expect(1+1== 3).toBeFalsy();

         expect(5).toBeLessThan(10);
         expect(20).toBeGreaterThan(10);

         expect('1234567').toMatch(/123/);

         expect(["apples", "oranges", "pears"]).toContain("oranges")

        });
      });

    });

});
