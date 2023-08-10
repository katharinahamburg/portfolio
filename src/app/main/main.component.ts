import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
arrows = ['arrowdown1.svg', 'arrowdown2.svg', 'arrowdown3.svg', 'arrowdown4.svg', 'arrowdown5.svg'];
currentArrow = 0;
showArrow = true;

ngOnInit() {
  this.updateArrow();
}

updateArrow()  {
  setInterval(() => {
    this.currentArrow++;
    this.currentArrow = this.currentArrow % this.arrows.length;
  }, 400);
  }

}
