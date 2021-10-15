import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{title}}</h1>
  <pm-product></pm-product>
  </div>
  `
  //templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acme Product Management';
}