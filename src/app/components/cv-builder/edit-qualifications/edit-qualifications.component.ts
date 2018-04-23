import { Component, OnInit } from '@angular/core';
import { CvBuilderComponent } from "../cv-builder.component";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-edit-qualifications',
  templateUrl: './edit-qualifications.component.html',
  styleUrls: ['./edit-qualifications.component.css']
})
export class EditQualificationsComponent implements OnInit {

  	index: number =  this.cv.UserSelectedQualificationsData.index;
  	UserSelectedQualificationsData : any =  this.cv.UserSelectedQualificationsData;

  	constructor(private cv: CvBuilderComponent) { }

  ngOnInit() {
  	
  }


   changeDetails(event) : void{
 
 	this.index = this.cv.UserSelectedQualificationsData.index;  
  	this.cv.UserData.qualifications[this.index].qualifications = this.UserSelectedQualificationsData.qualifications;
  	this.cv.UserData.qualifications[this.index].description = this.UserSelectedQualificationsData.description;
  	this.cv.UserData.qualifications[this.index].show_description = this.UserSelectedQualificationsData.show_description;
  	
  	//alert(this.UserSelectedSkillData.show_description); 
  	//this.cv.UserData.shills[this.index].description = this.UserSelectedSkillData.description;
  
  }


   private addQualifications() : void{
    this.cv.addQualifications();
  }

  private removeQualifications() : void{
    this.cv.removeQualifications();
  }

   home(){
     $('.editable').removeClass('active');
     $('app-edit-settings').addClass('active');
  }

}
