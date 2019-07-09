import { Component, Input } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'custom-date-picker',
  template: `<div class="form-group">
    <div [id]="id" class="input-group">
      <input class="form-control" placeholder="yyyy-mm-dd"
             name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary calendar" (click)="d.toggle()" type="button"></button>
      </div>
    </div>
  </div>
  <hr/>
  <pre>Model: {{ model | json }}</pre>`
})
export class CustomDatePickerComponent  {  
  @Input() id: string;
  model: NgbDateStruct;
  constructor() {

  }
}
