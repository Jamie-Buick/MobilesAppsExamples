import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './people.component.html'
})
export class PeopleComponent {
  input !:string;
  names: string [] = ["John", "Jamie", "Jack"];


  ngOnInit(){
    this.input = "";
  }

  addName(){
    this.names.push(this.input);
  }

  removeLast() {
    this.names.pop();
  }

}
