import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  courses: string[] = ["C#","Java","Angular","React js"];

  firstName: string = 'mahmoud';
  lastName: string = 'ali;';
  age: number = 20;
  imageURL: string;
  constructor(private studentService:StudentService) {
    this.imageURL = '../../assets/boy.jpg';
  }
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  changeLastName() {
    this.lastName = 'ahmed';
  }
  changeFirstName(newFName: string) {
    this.firstName = newFName;
  }
  incrementAge() {
    this.age++;
  }
  decrementAge() {
    this.age--;
  }
  invalidAge(): boolean {
    return this.age > 25;
  }
}
