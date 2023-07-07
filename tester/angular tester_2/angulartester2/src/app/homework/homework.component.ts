import { Component } from '@angular/core';
import { ServiceTesterService } from '../Services/service-tester.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
  providers: [ServiceTesterService],
})
export class HomeworkComponent {
  HeaderReceiver: any = [];
  constructor(public service: ServiceTesterService) {
    this.HeaderReceiver = service.header;
  }
  Info: Array<any> = [{ Month: 'Januray', Tax: 100 }];
  Receiver(month: string, tax: string) {
    this.Info.push({ Month: month, Tax: tax });
  }
  Delete(value: any) {
    let index = this.Info.indexOf(value);
    this.Info.splice(index, 1);
  }
}
