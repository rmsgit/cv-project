import { Component, OnInit } from '@angular/core';
import { CvBuilderComponent } from "../cv-builder.component";

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})
export class EditSettingsComponent implements OnInit {
  
  fontFamily : any =  this.cv.fontFamily; 
  Colors : any =  this.cv.Colors; 
  User : any =  this.cv.UserData; 
  template: any = this.cv.template;

  constructor(public cv: CvBuilderComponent) { }

  ngOnInit() {
  }

  selectFont(index){
  	this.cv.UserData.settings.font_family = this.cv.fontFamily[index].class; 
  }

  selectTheme(index){
  	this.cv.UserData.settings.color_theme.primary = this.cv.Colors[index].primary; 
  	this.cv.UserData.settings.color_theme.secondary = this.cv.Colors[index].secondary; 
  	this.cv.UserData.settings.color_theme.id = index; 

  }


  selectTemplate(index){
    this.cv.UserData.settings.template = this.cv.template[index].class; 
    this.selectTheme(index);
  }
  

}
