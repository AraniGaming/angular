import { Component, Input} from "@angular/core";
import { Student } from "../student";

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent {
  @Input() student!: Student;

get studs(){return this.student;}

}
