import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgbyhostbinding]'
})
export class BgbyhostbindingDirective implements OnInit {

  constructor(private element:ElementRef, private renderer: Renderer2) { }
  // <=================================================@HostBinding===============================================================================>
  // @HostBinding('style.backgroundColor') background:string ='transparent'; //binding style.background property of host element to background variable of directive class
  // @HostBinding('style.border') border:string ='none';
  // @HostBinding('style.transition') transition:string ='none';
  // @HostListener('mouseenter') whenMouseEnter(){
  //   this.background ='Aqua';
  //   this.border = 'red 2px solid';
  //   this.transition='0.5s';
  // }
  // @HostListener('mouseleave') whenMouseLeave(){
  //   this.background ='transparent';
  //   this.border ='none'
  // }
  // <=================================================Custom Property Binding with Directive===============================================================================>
  @Input() defaultColor :string ='transparent';
  @Input() highLightColor : string ='Aqua';

  @HostBinding('style.backgroundColor') background:string = this.defaultColor; //binding style.background property of host element to background variable of directive class
  @HostBinding('style.border') border:string ='none';
  @HostBinding('style.transition') transition:string ='none';
  @HostListener('mouseenter') whenMouseEnter(){
    this.background =this.highLightColor;
    this.border = 'red 2px solid';
    this.transition='0.5s';
  }
  @HostListener('mouseleave') whenMouseLeave(){
    this.background =this.defaultColor;
    this.border ='none'
  }
  ngOnInit(){
this.background= this.defaultColor;
  }
}
