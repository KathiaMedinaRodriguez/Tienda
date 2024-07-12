import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, DecimalPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Peso: number = 0;
  Altura: number = 0;
  imc: number | null = null;
  message: string = '';

  calculateIMC() {
    if (this.Peso > 0 && this.Altura > 0) {
      this.imc = this.Peso / ((this.Altura / 100) ** 2);
      this.setMessage();
    } else {
      this.message = 'Por favor ingrese peso y altura válidos';
      this.imc= null;
    }
  }

    setMessage()
    {
      if (this.imc !== null) {
        if (this.imc < 18.5) {
          this.message = 'Bajo de peso';
        } else if (this.imc >= 18.5 && this.imc < 24.9) {
          this.message = 'Peso Normal';
        } else if (this.imc >= 25 && this.imc < 29.9) {
          this.message = 'Exceso de peso';
        } else {
          this.message = 'Obesidad';
        }
      }
    }
  }

