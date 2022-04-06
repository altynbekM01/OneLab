import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<h2>This is from header</h2>',
  styles: ['h2 { color: red }'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
