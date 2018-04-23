import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as data from  "../../../models/cv.model"; 
import { CvBuilderComponent } from "../cv-builder.component";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],

})
export class EditEducationComponent implements OnInit {

	UserData : any = data.UserData;
	index: number =  this.cv.UserSelectedEducationData.index;
	UserSelectedEducationData : any =  this.cv.UserSelectedEducationData;



  constructor(private cv: CvBuilderComponent) { }

  ngOnInit() { 

  }


  changeDetails(event){
 
 	  this.index = this.cv.UserSelectedEducationData.index;  
  	this.cv.UserData.education[this.index].college_name = this.UserSelectedEducationData.college_name;
  	this.cv.UserData.education[this.index].description = this.UserSelectedEducationData.description;
  	this.cv.UserData.education[this.index].college_city = this.UserSelectedEducationData.college_city;
  
  }

  

  getData(){ 

  }


  private addCollege() : void{
    this.cv.addCollege();
  }

  private removeCollege() : void{
    this.cv.removeCollege();
  }


  home(){
     $('.editable').removeClass('active');
     $('app-edit-settings').addClass('active');
  }



}
