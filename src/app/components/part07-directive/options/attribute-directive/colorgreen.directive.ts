import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[alexcolorgreen]',
})
export class ColorgreenDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }
}
