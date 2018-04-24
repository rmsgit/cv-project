import { Component, OnInit } from '@angular/core';
import { CvBuilderComponent } from "../cv-builder.component";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  	index: number =  this.cv.UserSelectedSkillData.index;
  	UserSelectedSkillData : any =  this.cv.UserSelectedSkillData;

  	constructor(public cv: CvBuilderComponent) { }

  ngOnInit() {
  	console.log(this.UserSelectedSkillData)
  }


  changeDetails(event) : void{
 
 	this.index = this.cv.UserSelectedSkillData.index;  
  	this.cv.UserData.skills[this.index].skill_name = this.UserSelectedSkillData.skill_name;
  	this.cv.UserData.skills[this.index].skill_rating = this.UserSelectedSkillData.skill_rating;
  	this.cv.UserData.skills[this.index].description = this.UserSelectedSkillData.description;
  	this.cv.UserData.skills[this.index].show_description = this.UserSelectedSkillData.show_description;
  	
  	//alert(this.UserSelectedSkillData.show_description); 
  	//this.cv.UserData.shills[this.index].description = this.UserSelectedSkillData.description;
  
  }


   public addSkills() : void{
    this.cv.addSkills();
  }
   public removeSkills() : void{
    this.cv.removeSkills();
  }

   home(){
     $('.editable').removeClass('active');
     $('app-edit-settings').addClass('active');
  }
}
