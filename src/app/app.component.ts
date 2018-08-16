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
  //Test
  @Input() description = 'Angular';
  public heroes = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
  test:string;
  data:any[];
  constructor(elm: ElementRef) {
    this.description = elm.nativeElement.getAttribute('description');
    console.log('******COMPONENT******');
    this.data = this.heroes;
    console.log(this.data );
  }
}
