import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { errorJucture } from '../../data/error/juncture';

@Component({
  selector: 'syg-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent implements OnInit, OnChanges {
  @Input() formName: string;
  @Input() fieldName: string;
  @Input() error: Object;

  private message: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.error) {
      this.setError();
    }
  }

  setError() {
    const errorList = Object.keys(this.error);
    if (errorList.length) {
      const formName = errorJucture[this.formName];
      const fieldName = formName[this.fieldName];
      this.message = fieldName[errorList[0]];
    }
  }

}
