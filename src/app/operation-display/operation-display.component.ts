import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operation-display',
  standalone: true,
  imports: [],
  templateUrl: './operation-display.component.html',
  styleUrl: './operation-display.component.css'
})
export class OperationDisplayComponent {
  @Input({required: true}) lastOperation: string = ''
}
