import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  userName: string = '';
  bool: boolean = true;
  objArray: Array<any> = [
    { id: 1, name: ' Post 1' },
    { id: 2, name: ' Post 2' },
    { id: 3, name: ' Post 3' },
    { id: 4, name: ' Post 4' },
  ];
  Delete(value: any) {
    let index = this.objArray.indexOf(value);
    this.objArray.splice(index, 1);
  }
  addNew() {
    this.objArray.push({ id: 5, name: 'lemuri' });
  }
  btnClick() {
    console.log('btnclick');
  }
  Values: Array<string> = ['post1', 'post2', 'post3', 'post4', 'post5'];
  onKeyup(value: string) {
    console.log(value);
  }
}
