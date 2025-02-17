import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';
import { By } from "@angular/platform-browser";

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CalculadoraComponent] 
    });
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe actualizar el valor de operandoA cuando cambia el valor de entrada', () => {
    const inputA: HTMLInputElement = fixture.nativeElement.querySelector('#operandoA');
    inputA.value = '5';
    inputA.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.operandoA).toEqual(Number(inputA.value));
  });

  it('Debe actualizar el resultado cuando se hace clic en el botón Sumar', () => {
    component.operandoA = 4;
    component.operandoB = 5;
    const sumarButton: HTMLButtonElement = fixture.nativeElement.querySelector('#sumarButton');
    sumarButton.click();
    fixture.detectChanges();
    const resultadoElement: HTMLElement = fixture.nativeElement.querySelector('#resultado');
    expect(resultadoElement.textContent).toContain('9');
  });

  it('Debe actualizar el resultado cuando se hace clic en el botón Multiplicar', () => {
    component.operandoA = 6;
    component.operandoB = 5;
    const multiplicarButton: HTMLButtonElement = fixture.nativeElement.querySelector('#botonMultiplicar');
    multiplicarButton.click();
    fixture.detectChanges();
    const resultadoElement: HTMLElement = fixture.nativeElement.querySelector('#resultado2');
    expect(resultadoElement.textContent).toContain('30');
  });

  it('Debe validar que el input con id=operandoB esté dentro de una clase form-group', () => {
    const formGroupElement = fixture.debugElement.query(By.css('.form-group #operandoB'));
    expect(formGroupElement).toBeTruthy();
  });

  it('Debe calcular la división cuando operandoB es distinto de cero', () => {
    component.operandoA = 10;
    component.operandoB = 2;
    const dividirButton: HTMLButtonElement = fixture.nativeElement.querySelector('#botonDividir');
    dividirButton.click();
    fixture.detectChanges();
    expect(component.resultadoDividir).toEqual(5);
  });

  it('Debe verificar si el valor es null al intentar dividir por cero', () => {
    component.operandoA = 10;
    component.operandoB = 0;
    const dividirButton: HTMLButtonElement = fixture.nativeElement.querySelector('#botonDividir');
    dividirButton.click();
    fixture.detectChanges();
    expect(component.resultadoDividir).toBeNull();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
