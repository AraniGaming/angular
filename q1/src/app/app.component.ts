import { Component } from '@angular/core';
import { Student } from "./student";
import { PassComponent } from './pass/pass.component';
@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'q1';
c=0;
sarr=[{name:"",mark:0}];
addItem(name: string,m: string) {
var y:number=+m;
  this.sarr.push({
    name,
    mark:y
  });
}
  get students() {
    
      return this.sarr;
    
  }
}
