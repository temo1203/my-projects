import { __values } from 'tslib';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ServiceTesterService } from '../Services/service-tester.service';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css'],
})
export class Homework2Component {
  form: any;
  emailRegex: any = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  contactRegex: any = '';
  constructor(private service: ServiceTesterService, private fb: FormBuilder) {
    //? first type reactive form
    this.form = fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      contactDetails: fb.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        contactNo: [
          '',
          [Validators.required, Validators.pattern(this.contactRegex)],
        ],
      }),
      skills: fb.array([]),
    });
    // ! second type reactive form
    // this.form = new FormGroup({
    //   fullName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.maxLength(30),
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(this.emailRegex),
    //   ]),
    //   contactDetails: new FormGroup({
    //     address: new FormControl('', [Validators.required]),
    //     shippingAddress: new FormControl('', [Validators.required]),
    //     contactNo: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern(this.contactRegex),
    //     ]),
    //   }),
    //   skills: new FormArray([]),
    // });
  }
  get FullName() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  get AddressFunc() {
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get Contact() {
    return this.form.get('contactDetails.contactNo');
  }
  get Skills() {
    return this.form.get('skills') as FormArray;
  }
  remove(value: any) {
    this.Skills.removeAt(value);
  }
  Submit() {
    console.log(this.form.value);
    this.service.Formlist.push(this.form.value);
  }
  lite() {
    console.log(this.FullName.value);
  }
  addSkills(Value: any) {
    this.Skills.push(new FormControl(Value));
    console.log(this.form.value);
  }
}
