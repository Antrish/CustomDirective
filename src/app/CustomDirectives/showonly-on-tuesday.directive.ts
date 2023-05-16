import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowonlyOnTuesday]'
})
export class ShowonlyOnTuesdayDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  @Input() set appShowonlyOnTuesday(isTue : boolean){
    if(isTue){
      this.renderer.addClass(this.element.nativeElement,'isTuesday')
    }
  }

}
