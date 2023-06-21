import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  currentItem = 'parent_to_child';
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem2(thing: string) {
    this.items.push('from_parent', thing);
  }
  addItem(value: string) {
    this.items.push(value);
  }
}
