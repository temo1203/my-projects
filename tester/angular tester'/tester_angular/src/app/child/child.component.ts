import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() item = '';
  @Input() item_2 = '';
  // @Output() newItemEvent = new EventEmitter<string>();
  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  //   console.log(value);
  // }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    setTimeout(() => {
      if (this.item == 'parent_to_child') {
        console.log('onchangetemo works');
      }
    }, 5000);
  }
  childToparent: string = 'child_To_parent';
  @Output() newItemEvent = new EventEmitter<any>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
