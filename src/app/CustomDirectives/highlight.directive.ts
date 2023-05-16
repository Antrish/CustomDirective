import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elemtnt:ElementRef, private renderer:Renderer2) { 

  }
ngOnInit(){
this.renderer.setStyle(this.elemtnt.nativeElement,'backgroundColor','Yellow')
// also we can set more than one property or attribute at the same time.
this.renderer.setProperty(this.elemtnt.nativeElement, 'value', 'Jai Mata Di')
this.renderer.setAttribute(this.elemtnt.nativeElement,'ariaCurrent','true')

}
}
