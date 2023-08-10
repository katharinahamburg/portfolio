import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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
}
