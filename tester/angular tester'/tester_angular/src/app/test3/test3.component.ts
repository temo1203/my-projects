import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  Input,
  DoCheck,
} from '@angular/core';
import { filter } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnChanges, DoCheck {
  @Input() just: any = '';
  @Input() just_2: any = '';
  filt: any = '';
  filt_things: any = '';
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['just'].currentValue) {
      console.log(changes['just'].currentValue);
    }
    console.log(changes['just_2']);
    console.log(changes['just_2'].previousValue);
  }
  prevVal: string = '';
  ValGet(value: string) {
    this.prevVal = value;
  }
  ngDoCheck(): void {
    if (this.prevVal == 'kargi') {
      console.log(this.prevVal);
    } else {
      console.log('cudia');
    }
  }
}
