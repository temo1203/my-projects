import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceTesterService {
  Formlist: Array<any> = [];
  postList: Array<any> = [
    { id: 1, name: 'bla bla1' },
    { id: 2, name: 'bla bla2' },
    { id: 3, name: 'bla bla3' },
    { id: 4, name: 'bla bla4' },
  ];
  header: any = ['Home', 'Work', 'Jobs'];
  constructor() {}
}
