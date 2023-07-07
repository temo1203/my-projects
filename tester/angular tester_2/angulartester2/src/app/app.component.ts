import { __values } from 'tslib';
import { Component } from '@angular/core';
import { ServiceTesterService } from './Services/service-tester.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceTesterService],
})
export class AppComponent {
  posts2: Array<any> = [];
  posts: Array<any> = [];

  constructor(private TestOne: ServiceTesterService) {
    this.posts = TestOne.postList;
    this.posts2 = TestOne.Formlist;
  }
  del(value: any) {
    let index = this.posts2.indexOf(value);
    this.posts2.splice(index, 1);
  }
  title = 'angulartester2';
  userDetails = {
    name: 'user-1',
    city: 'new-city',
  };
}
