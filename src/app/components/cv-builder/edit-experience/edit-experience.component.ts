import { Component, OnInit } from '@angular/core';
import { CvBuilderComponent } from "../cv-builder.component";


@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

	index: number =  this.cv.UserSelectedExperienceData.index;
	UserSelectedExperienceData : any =  this.cv.UserSelectedExperienceData;

  constructor(public cv: CvBuilderComponent) { }

  ngOnInit() {
  }


   changeDetails(event) : void{
 
 	this.index = this.cv.UserSelectedExperienceData.index;  
  	this.cv.UserData.work_experience[this.index].company_name = this.UserSelectedExperienceData.company_name;
  	this.cv.UserData.work_experience[this.index].location = this.UserSelectedExperienceData.location;
  	this.cv.UserData.work_experience[this.index].designation = this.UserSelectedExperienceData.designation;
  	this.cv.UserData.work_experience[this.index].description = this.UserSelectedExperienceData.description;
  
  }


   public addExperience() : void{
    this.cv.addExperience();
  }

  public removeExperience() : void{
    this.cv.removeExperience();
  }


}
