import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../student";

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent {
@Input() student!: Student;

get studs(){return this.student;}

}
