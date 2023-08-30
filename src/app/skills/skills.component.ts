import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

rightarrows = ['arrowright1.svg', 'arrowright2.svg', 'arrowright3.svg', 'arrowright1.svg'];
leftarrows = ['arrowleft1.svg', 'arrowleft2.svg', 'arrowleft3.svg', 'arrowleft1.svg'];

currentSkillArrow = 0;
showSkillArrow = true;


updateSkillArrow()  {
    this.currentSkillArrow++;
    this.currentSkillArrow = this.currentSkillArrow % this.rightarrows.length;
    this.currentSkillArrow = this.currentSkillArrow % this.leftarrows.length;
    setTimeout(() => {
    }, 200);
  }
}
