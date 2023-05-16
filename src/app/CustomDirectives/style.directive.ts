import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @Input() set appStyle(input: object) {
    let entries = Object.entries(input);
    for (let entry of entries)
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1])
  }

}
