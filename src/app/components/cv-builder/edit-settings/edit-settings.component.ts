import { Component, OnInit } from '@angular/core';
import { CvBuilderComponent } from "../cv-builder.component";

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})
export class EditSettingsComponent implements OnInit {
  
  fontFamily : any =  this.cv.fontFamily; 

  constructor(private cv: CvBuilderComponent) { }

  ngOnInit() {
  }

  selectFont(index){
  	this.cv.UserData.settings.font_family = this.cv.fontFamily[index].class;
  	console.log(this.cv.UserData.settings.font_family);
  }

}
