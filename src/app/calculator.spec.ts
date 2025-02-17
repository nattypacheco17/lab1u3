import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  //ARRANGE
  let calculator: any;

  beforeEach(() => {
    calculator = new Calculator();
  });


  describe('Test for multiply', () => {
    it('should return nine', () => {

      //Act
      //Assert
      expect(calculator.multiply(3, 3)).toEqual(9);
    });

    it('should return four', () => {

      //Act
      //Assert
      expect(calculator.multiply(2, 2)).toEqual(4);
    });

  });


  describe('Test for divide', () => {
    it('should return null when dividing by zero', () => {
      // ACT
      // ASSERT
      expect(calculator.divide(5, 0)).toBeNull();
    });

    it('should return the correct division result', () => {
      // ACT
      // ASSERT
      expect(calculator.divide(10, 2)).toEqual(5);
    });
  });


  describe('Jasmine Matchers', () => {
    it('test matchers', () => {
      let name = 'Luis';
      let name1;

      expect(name).toBeDefined();
      expect(name1).toBeUndefined();

      expect(1+2 ==3).toBeTruthy();
      expect(1+1 ==3).toBeFalsy();

      expect(5).toBeLessThan(10);
      expect(20).toBeGreaterThan(10);

      expect('1234567').toMatch(/123/);

      expect(['apple', 'orange', 'pears']).toContain('orange');
    });
  });
});
