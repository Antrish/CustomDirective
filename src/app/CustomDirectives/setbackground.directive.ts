import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setbackground]'
})
export class SetBackgroundDirective implements OnInit {
    // private element: ElementRef; // short cut to create private property- 'just pass property name with private keyword into constructor'
    constructor(private element: ElementRef) {
        // element.nativeElement.style.backgroundColor='green'; // writting logic inside ctor is not a good practice. Better shift to ngOnInit();
        this.element = element;
    }
    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'lightgreen';
    }
}