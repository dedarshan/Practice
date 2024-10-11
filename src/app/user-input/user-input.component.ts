import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Investment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredIntialInv = '0';
  enteredAnnualInc = '0';
  enteredExpected = '5';
  enteredDuration = '10';
  @Output() calculate = new EventEmitter<Investment>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredIntialInv,
      annualInvestment: +this.enteredAnnualInc,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpected,
    });

    this.enteredIntialInv = '0';
    this.enteredAnnualInc = '0';
    this.enteredExpected = '5';
    this.enteredDuration = '10';
   // console.log(this.enteredIntialInv);
  }
}
