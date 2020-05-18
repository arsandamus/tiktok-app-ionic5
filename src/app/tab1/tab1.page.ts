import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class Tab1Page {

  slideOpts = {
    direction: 'vertical'
  };

  constructor() {}

}
