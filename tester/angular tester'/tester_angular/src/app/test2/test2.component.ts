import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component {
  goga: string = 'goga';
  names: any = [
    { name: 'temo', username: 'lortkipanidze' },
    { name: 'sandro', username: 'kvirikashvili' },
  ];
  getUserData(value: any, value2: any) {
    if (value2 === '' || !value2.includes('@') || value === '') {
      console.log('false');
    } else {
      this.names.unshift({ name: value, username: value2 });
    }
  }
}
