import { Directive, ElementRef, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor(element: ElementRef) {
    // element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted.toString());
  }

}
