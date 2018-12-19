import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  isHighlighted = false;

  constructor(element: ElementRef) {
    // element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted;
  }

}
