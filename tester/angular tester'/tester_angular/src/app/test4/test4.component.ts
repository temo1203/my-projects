import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css'],
})
export class Test4Component {
  currentvalue: any = [3, 4, 5, 10];
  CurrentValue: string[] = [''];
  InputValue(value: any) {
    this.CurrentValue = value;
  }
}
