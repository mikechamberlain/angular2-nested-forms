import {Component, forwardRef, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'inner',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InnerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InnerComponent),
      multi: true,
    }
    ],
    template: `
<div ngForm novalidate #f="ngForm">
  
    <input type="text"
      name="first"
      [ngModel]="name?.first"
      (change)="onChange($event)"
      (keyup)="onChange($event)"
      (blur)="onBlur($event)"
      required />
      
    <input type="text"
      name="last"
      [ngModel]="name?.last"
      (change)="onChange($event)"
      (keyup)="onChange($event)"
      (blur)="onBlur($event)"
      required />
      
  </div>

<div style="margin: 20px;">inner={{f.value|json}}</div>
<div style="margin: 20px;">errors={{f.errors|json}}</div>
<div style="margin: 20px;">valid={{f.valid}}</div>
`,
})
export class InnerComponent implements ControlValueAccessor, Validator  {

  @ViewChild('f') form: FormControl;

  name = {
    first: '',
    last: ''
  };

  private propagateChange: any;
  private propogateTouched: any;

  onChange() {
    this.name = this.form.value;
    this.propagateChange(this.name);
  }

  onBlur(event: any) {
    this.propogateTouched();
  }

  writeValue(obj: any): void {
    if (obj) {
      this.name = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propogateTouched = fn;
  }

  validate(c: AbstractControl): {[p: string]: any} {
    return this.form.valid ? null : {invalidName: true};
  }
}
