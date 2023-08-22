import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('startAnimation', [
      transition(':enter', [style({ transform: 'rotate(150deg)' }), animate('515ms')])
    ])
  ]
})

export class PortfolioComponent {

showCircle = true;


rightarrows = ['arrowright1.svg', 'arrowright2.svg', 'arrowright3.svg', 'arrowright1.svg', 'arrowright2.svg', 'arrowright3.svg', 'arrowright1.svg'];

currentSkillArrow = 0;
showSkillArrow = true;

updateSkillArrow()  {
    this.currentSkillArrow++;
    this.currentSkillArrow = this.currentSkillArrow % this.rightarrows.length;
  }

  isHovered = [false, false, false];

  rotateCircle(index: number) {
    this.isHovered[index]= true;
      document.getElementById('circle').style.transform = 'rotate(-150deg)';
      document.getElementById('circle_1').style.transform = 'rotate(150deg)';
      document.getElementById('circle_2').style.transform = 'rotate(-150deg)';   
  }

  noRotationCircle(index: number) {
    this.isHovered[index] = false;
    document.getElementById('circle').style.transform = 'rotate(0deg)';
      document.getElementById('circle_1').style.transform = 'rotate(0deg)';
      document.getElementById('circle_2').style.transform = 'rotate(0deg)'; 
  }

}
