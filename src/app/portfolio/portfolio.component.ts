import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

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


rightarrows = ['arrowright1.svg', 'arrowright2.svg', 'arrowright3.svg'];
leftarrows = ['arrowleft1.svg', 'arrowleft2.svg', 'arrowleft3.svg'];
currentSkillArrow = 0;
showSkillArrow = true;

ngOnInit() {
  this.updateSkillArrow();
}

updateSkillArrow()  {

  setInterval(() => {
    this.currentSkillArrow++;
    this.currentSkillArrow = this.currentSkillArrow % this.rightarrows.length;
    this.currentSkillArrow = this.currentSkillArrow % this.leftarrows.length;
  }, 400);
  }

  
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
    setTimeout(() => {
      document.getElementById('arrow-down2').style.transform = 'rotate(150deg)';
      document.getElementById('arrow-down').style.transform = 'rotate(-150deg)';
      document.getElementById('arrow-down3').style.transform = 'rotate(-150deg)';
    }, 200);
    document.getElementById('arrow-down2').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-down').style.transform = 'rotate(0deg)';
    document.getElementById('arrow-down3').style.transform = 'rotate(0deg)';
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}