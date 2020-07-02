import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Hello World {{name}}</h2>
  <h3>{{greetUser(name)}}</h3>
  <h3>{{siteUrl}}</h3>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public siteUrl = window.location.href;
  public name = "John"
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(name){
    return "Hello "+name;
  }
}
