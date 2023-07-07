import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {
  FormControl,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Child2Component } from './child2/child2.component';
import { HomeworkComponent } from './homework/homework.component';
import { PipeTestPipe } from './Pipes/pipe-test.pipe';
import { PipeTestPipe2 } from './Pipes/pipe-test-2.pipe';
import { Homework2Component } from './homework2/homework2.component';
import { FormComponent } from './form/form.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    HomeworkComponent,
    PipeTestPipe,
    PipeTestPipe2,
    Homework2Component,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
