import { Component } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { OperationDisplayComponent } from '../operation-display/operation-display.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterButtonComponent, OperationDisplayComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0
  operation = ''

  increment () {
    this.count++
    this.operation = 'Increment'
  }

  decrement () {
    this.count--
    this.operation = 'Decrement'
  }

  reset() {
    this.count = 0
    this.operation = 'Reset'
  }

  onButtonClick(operation: string){
    if (operation === 'Increment') this.increment()
    else if (operation === 'Decrement') this.decrement();
    else if (operation === 'Reset') this.reset()
  }
}
