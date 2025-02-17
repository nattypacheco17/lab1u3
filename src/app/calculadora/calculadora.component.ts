import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  resultadoMultiplicar: number = 0;
  resultadoDividir: any;
  onSumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }
  onMultiplicar(): void {
    this.resultadoMultiplicar = this.operandoA * this.operandoB;
  }
  onDividir(): void {
    if (this.operandoB === 0) {
      this.resultadoDividir = null;
    } else {
      this.resultadoDividir = this.operandoA / this.operandoB;
    }
  }

}
