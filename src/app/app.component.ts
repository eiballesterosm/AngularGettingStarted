import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `<div>
                <h1>{{pageTitle}}</h1>                                
                <div>My first Component</div>
                <pm-products></pm-products>
              </div>`
})
export class AppComponent {

  pageTitle: string = 'Acme Product Management';
  test: number = 30;

  public Test() {
    this.test = this.test++;
  }
}