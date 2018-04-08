import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
 

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.css']
})
export class CvBuilderComponent implements OnInit {

	education: any; work_experience: any;


	UserData : any = {
		name: 'Your Name',
		address: '123 Street No, City, Province, Country', 
		phone: '(+000) 12 345 6789',
		mobile: '(+000) 12 345 6789',
		email: 'myemailaddress@email.com',
		education: '',
		work_experience: ''
	}
 	



  constructor() {  

  }

  ngOnInit() {

  	ClassicEditor
	    .create( document.querySelector( '.ck-education' ) ) 
	    .then( education => { 
	        this.education = education;
	    } )
	    .catch( error => {
	        console.error( error );
	    } ); 


	 ClassicEditor 
	    .create( document.querySelector( '.ck-work' ) )
	    .then( work_experience => {  
	        this.work_experience = work_experience;
	    } )
	    .catch( error => {
	        console.error( error );
	    } ); 
  	
  }

  getDataEducation(){ 
  	this.UserData.education = this.education.getData()
  	console.log(this.UserData);
  }

  getDataWorkExperience(){ 
  	this.UserData.work_experience = this.work_experience.getData()
  	console.log(this.UserData);
  }


}
