import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirectives/setbackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { HoverDirective } from './hover.directive';
import { BgbyhostbindingDirective } from './bgbyhostbinding.directive';
import { ClassDirective } from './CustomDirectives/class.directive';
import { ShowonlyOnTuesdayDirective } from './CustomDirectives/showonly-on-tuesday.directive';
import { StyleDirective } from './CustomDirectives/style.directive';
import { IfDirective } from './CustomDirectives/if.directive';


@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BgbyhostbindingDirective,
    ClassDirective,
    ShowonlyOnTuesdayDirective,
    StyleDirective,
    IfDirective,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
