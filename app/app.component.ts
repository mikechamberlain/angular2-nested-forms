import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Hello {{name}}</h1>
<div ngForm novalidate #f="ngForm">
  <input ngModel name="first">
  <input type="checkbox" [ngModel]="true" name="switch" />
  <div>
    <inner [ngModel]="name" name="inner" *ngIf="f.value.switch"></inner>
  </div>  
</div>
<div>value=
{{f.value|json}}
</div>
<div>valid=
{{f.valid|json}}
</div>
<div>errors=
{{f.errors|json}}
</div>

`,
})
export class AppComponent  {
  name = {first:'Mike','last':'cee'};
}
