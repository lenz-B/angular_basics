import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  @Input() label: string = ''
  @Output() buttonClick = new EventEmitter<void>()

  onClick(){
    this.buttonClick.emit();
  }
}
