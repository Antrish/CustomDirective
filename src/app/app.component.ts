import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CustomDirective';
  isTuesday : number = 0;
  active:boolean = true;
  
  ngOnInit(){
  this.isTuesday = new Date().getDay();

  }
  display : boolean = true;
  occupation :string = 'Teacher';
  showNotice(){
    this.display = false;
  }
}
