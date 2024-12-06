import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustom]',
  standalone: true
})
export class MyCustomDirective {

  constructor() { }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent){
    event.preventDefault()
  }

}
