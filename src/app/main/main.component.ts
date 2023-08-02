import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
 public arrow = [];

 constructor() {
  for (let i = 0; i < 4; i++) {
 this.arrow.push('/assets/img/arrowdown_' + i);
  }
 }

}
