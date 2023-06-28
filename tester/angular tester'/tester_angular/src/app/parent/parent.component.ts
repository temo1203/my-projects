import {
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit, OnInit {
  img: string = '../../assets/number-14-valentines-day-with-3d-hearts.jpg';
  currentItem = 'parent_to_child';
  currentItem_2 = 'parent_to_child_2';
  Item1: string = '';
  lite1: string = '';
  items = ['item 1', 'item 2', 'item 3', 'item 4'];
  addItem2(thing: string) {
    this.items.push(thing);
  }
  addItem(value: string) {
    this.items.push(value);
  }
  ngOnInit(): void {
    setTimeout(() => {
      console.log('ngoninit is called');
    }, 5000);
  }
  @ViewChild(ChildComponent) child!: ChildComponent;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.lite1 = this.child.item;
      this.Item1 = this.child.childToparent;
    }, 0);
  }
  bool: boolean = true;
}
