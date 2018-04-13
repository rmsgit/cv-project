import { Component, OnInit, Injectable, Input, Renderer2 } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline'; 
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.css'], 
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
            description: 'Add your description about your college.',
            degree: true,
        },{
            college_name: 'College2',
            college_city: 'City2',
            description: 'Add your description about your college.',
            degree: true,
        },{
            college_name: 'College3',
            college_city: 'City3',
            description: 'Add your description about your college.',
            degree: true,
        },{
            college_name: 'College4',
            college_city: 'City4',
            description: 'Add your description about your college.',
            degree: true,
        }],
        work_experience: [{
            company_name: 'Company Name1',
            designation: 'Designation1',
            location: 'Location',
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
        },{
            company_name: 'Company Name2',
            designation: 'Designation2',
            location: 'Location',
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
        },{
            company_name: 'Company Name3',
            designation: 'Designation3',
            location: 'Location',
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
        },{
            company_name: 'Company Name4',
            designation: 'Designation4',
            location: 'Location',
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
        }],
        skills: [{
            skill_name: 'Skill Title1',
            skill_rating: 0, 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: true,
        },
        {
            skill_name: 'Skill Title2',
            skill_rating: 0, 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: false,
        },{
            skill_name: 'Skill Title3',
            skill_rating: 0, 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: false,
        },{
            skill_name: 'Skill Title4',
            skill_rating: 0, 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: false,
        }],
        qualifications: [{
            qualifications: 'Qualifications Title 1', 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: true,
        },{
            qualifications: 'Qualifications Title 2', 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: true,
        },{
            qualifications: 'Qualifications Title 3', 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: true,
        },{
            qualifications: 'Qualifications Title 4', 
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: true,
        }],

        portfolio: [{
            title: 'Portfolio Title 1', 
            subtitle: 'Portfolio Subtitle 1',  
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: false,
        },{
            title: 'Portfolio Title 2', 
            subtitle: 'Portfolio Subtitle 2',  
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: false,
        },{
            title: 'Portfolio Title 3', 
            subtitle: 'Portfolio Subtitle 3',  
            description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
            show_description: false,
        }], 
        settings:[{
          font_family: 'inherit',
          color_theme: 'blue'
        }]
    };


    fontFamily : any = [
      {
        name: 'Default',
        class: 'default'
      },
      {
        name: 'Oswald',
        class: 'oswald'
      },
      {
        name: 'Montserrat',
        class: 'montserrat'
      },
      {
        name: 'Roboto Slab',
        class: 'roboto_slab'
      },
      {
        name: 'Exo 2',
        class: 'exo'
      }
    ];


	UserSelectedEducationData : any = {
	    college_name: '',
	    college_city: '',
	    description: '',
	    degree: true,
	    index: '',
	     
	}


  UserSelectedExperienceData : any = {
      company_name: '',
      designation: '',
      location: '',
      description: '',
      index: '',
       
  }

    UserSelectedSkillData : any = {
      skill_name: '',
      skill_rating: 0, 
      description: '',
      index: '', 
      show_description: false,
  }

  UserSelectedQualificationsData : any = {
    qualifications: '', 
    description: '',
    show_description: false,
    index: '', 
  }


  UserSelectedPortfolioData : any = {
    title: '', 
    subtitle: '',
    description: '',
    show_description: false,
    index: '', 
  }



  constructor(private renderer: Renderer2) {  
 
  } 

  ngOnInit() {
 	 
 
  	
  }
 

getData(){
	console.log(this.UserData);
}

private headerToggle() : void{ 
  
  this.openSlide('app-edit-cv-header');

}


private CollegeToggle() : void{
	
 
}


/* Education */

public addCollege() : void{

	var addEducationDetails = {
		college_name: 'College',
        college_city: 'City',
        description: 'Add your description about your college',
        degree: true,
	}

	this.UserData.education.push(addEducationDetails);

}

private editCollege(i) : void{ 
	this.UserSelectedEducationData.college_name = this.UserData.education[i].college_name;
	this.UserSelectedEducationData.description = this.UserData.education[i].description;
	this.UserSelectedEducationData.college_city = this.UserData.education[i].college_city;
	this.UserSelectedEducationData.index = i; 
  
  this.openSlide('app-edit-education');
 
} 


public removeCollege() : void{
	var index = this.UserSelectedEducationData.index;
	this.UserData.education.splice(index, 1)
}


/* Experience */

public addExperience() : void{

  var addExpDetails = {
        company_name: 'Company Name',
        designation: 'Designation',
        location: 'Location',
        description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
      
  }

  this.UserData.work_experience.push(addExpDetails);

}

private editExperience(i) : void{ 
  this.UserSelectedExperienceData.company_name = this.UserData.work_experience[i].company_name;
  this.UserSelectedExperienceData.designation = this.UserData.work_experience[i].designation;
  this.UserSelectedExperienceData.location = this.UserData.work_experience[i].location;
  this.UserSelectedExperienceData.description = this.UserData.work_experience[i].description;
  this.UserSelectedExperienceData.index = i; 
  
  this.openSlide('app-edit-experience');
 
} 


public removeExperience() : void{
  var index = this.UserSelectedExperienceData.index;
  this.UserData.work_experience.splice(index, 1)
}


/* Skills */

public addSkills() : void{

  var addSkillDetails = {
    skill_name: 'Skill Title',
    skill_rating: 0, 
    description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
    show_description: false,
    
  }

  this.UserData.skills.push(addSkillDetails);

}

private editSkills(i) : void{ 
  this.UserSelectedSkillData.skill_name = this.UserData.skills[i].skill_name;
  this.UserSelectedSkillData.skill_rating = this.UserData.skills[i].skill_rating; 
  this.UserSelectedSkillData.description = this.UserData.skills[i].description;
  this.UserSelectedSkillData.show_description = this.UserData.skills[i].show_description;
  this.UserSelectedSkillData.index = i; 
  
  this.openSlide('app-edit-skills');
 
} 


public removeSkills() : void{
  var index = this.UserSelectedSkillData.index;
  this.UserData.skills.splice(index, 1)
}



/* Qualifications */

public addQualifications() : void{

  var UserSelectedQualificationsData = {
    qualifications: 'Qualifications Title', 
    description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
    show_description: false,
    
  }

  this.UserData.qualifications.push(UserSelectedQualificationsData);

}

private editQualifications(i) : void{ 
  this.UserSelectedQualificationsData.qualifications = this.UserData.qualifications[i].qualifications; 
  this.UserSelectedQualificationsData.description = this.UserData.qualifications[i].description;
  this.UserSelectedQualificationsData.show_description = this.UserData.qualifications[i].show_description;
  this.UserSelectedQualificationsData.index = i; 
  
  this.openSlide('app-edit-qualifications');
 
} 


public removeQualifications() : void{
  var index = this.UserSelectedQualificationsData.index;
  this.UserData.qualifications.splice(index, 1)
}



/* Portfolio */

public addPortfolio() : void{

  var UserSelectedPortfolioData = {
    title: 'Portfolio Title', 
    subtitle: 'Portfolio Subtitle',  
    description: 'Add a description about a company you worked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla.',
    show_description: false,
    
  }

  this.UserData.portfolio.push(UserSelectedPortfolioData);

}

private editPortfolio(i) : void{ 
  this.UserSelectedPortfolioData.title = this.UserData.portfolio[i].title; 
  this.UserSelectedPortfolioData.subtitle = this.UserData.portfolio[i].subtitle;
  this.UserSelectedPortfolioData.description = this.UserData.portfolio[i].description;
  this.UserSelectedPortfolioData.show_description = this.UserData.portfolio[i].show_description;
  this.UserSelectedPortfolioData.index = i; 
  
  this.openSlide('app-edit-portfolio');
 
} 


public removePortfolio() : void{
  var index = this.UserSelectedPortfolioData.index;
  this.UserData.portfolio.splice(index, 1)
}


 

/* ----------------------------------------------- */


private openSlide(element){
  $('.editable').removeClass('active');
  $(element).addClass('active');
}
 
 

}
