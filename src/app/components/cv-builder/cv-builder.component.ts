import { Component, OnInit, Injectable, Input } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline'; 
// import * as data from  "../../models/cv.model"; 
// import { College } from "../../models/cv.model";

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.css'],
  // providers: [ College ]
})


@Injectable()
export class CvBuilderComponent implements OnInit {

	headerAct : boolean = false;
	educationAct : boolean  = false;
	active : boolean  = true;

	UserData : any = {
        name: 'Your Name',
        address: '123 Street No, City, Province, Country', 
        phone: '(+000) 12 345 6789',
        mobile: '(+000) 12 345 6789',
        email: 'myemailaddress@email.com',
        education: [{
            college_name: 'College1',
            college_city: 'City1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla adipisci delectus dignissimos aliquid laborum quasi est repudiandae, dicta, nemo necessitatibus unde deserunt nisi atque, dolor. Velit, deserunt, ut!',
            degree: true,
        },{
            college_name: 'College2',
            college_city: 'City2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla adipisci delectus dignissimos aliquid laborum quasi est repudiandae, dicta, nemo necessitatibus unde deserunt nisi atque, dolor. Velit, deserunt, ut!',
            degree: true,
        }],
        work_experience: [{
            company_name: 'Virtusa',
            designation: 'Senior Software Engineer',
            location: 'Colombo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla adipisci delectus dignissimos aliquid laborum quasi est repudiandae, dicta, nemo necessitatibus unde deserunt nisi atque, dolor. Velit, deserunt, ut!',
        }]
    };


	UserSelectedEducationData : any = {
	    college_name: '',
	    college_city: '',
	    description: '',
	    degree: true,
	    index: '',
	     
	}

  constructor() {  
 
  }

  ngOnInit() {
 	 
 
  	
  }

  

editEducation(i){ 
	this.UserSelectedEducationData.college_name = this.UserData.education[i].college_name;
	this.UserSelectedEducationData.description = this.UserData.education[i].description;
	this.UserSelectedEducationData.college_city = this.UserData.education[i].college_city;
	this.UserSelectedEducationData.index = i;
	//this.ar_index = i;


} 

getData(){
	console.log(this.UserData);
}

headerToggle(){
	this.headerAct = true;
	this.educationAct = false;

}


CollegeToggle(){
	this.headerAct = false;
	this.educationAct = true;

	
}




}
