import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component {
  ArrayObj: Array<any> = [
    { id: 1, name: 'Post 1' },
    { id: 2, name: 'Post 2' },
    { id: 3, name: 'Post 3' },
    { id: 4, name: 'Post 4' },
  ];
  bool: boolean = true;
  stepForm: string = 'Value is not def yet';
  SwitchOne(value: string) {
    this.stepForm = value;
  }
  Delete(value: any) {
    let index = this.ArrayObj.indexOf(value);
    this.ArrayObj.splice(index, 1);
  }
  AddItem() {
    this.ArrayObj.push({ id: 5, name: 'Post 5' });
  }
}
