import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  currentItem = 'parent_to_child';
  items = ['item 1', 'item 2', 'item 3', 'item 4'];
  addItem2(thing: string) {
    this.items.push(thing);
  }
  addItem(value: string) {
    this.items.push(value);
  }
}
