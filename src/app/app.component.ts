import { Component, Input, HostBinding, HostListener, ElementRef } from '@angular/core';

import { Version } from '@microsoft/sp-core-library';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @Input() description = 'Angular';
  // title = 'Angular';
  constructor(elm: ElementRef) {
    this.description = elm.nativeElement.getAttribute('description');
    console.log('******COMPONENT******');
  }
}
