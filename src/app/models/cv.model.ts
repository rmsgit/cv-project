import {Injectable} from "@angular/core";

export var UserData : any = {
        name: 'Your Name',
        address: '123 Street No, City, Province, Country', 
        phone: '(+000) 12 345 6789',
        mobile: '(+000) 12 345 6789',
        email: 'myemailaddress@email.com',
        education: [{
            college_name: 'College1',
            college_city: 'Colombo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus praesentium nulla adipisci delectus dignissimos aliquid laborum quasi est repudiandae, dicta, nemo necessitatibus unde deserunt nisi atque, dolor. Velit, deserunt, ut!',
            degree: true,
        },{
            college_name: 'College2',
            college_city: 'Gampaha',
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
 
 
 export var viewIndex = 0;


export var UserSelectedEducationData : any = {
    college_name: '',
    college_city: '',
    description: '',
    degree: true,
}



@Injectable()
export class College {
  role: number ; 
  college_name: string;

  selectCollege(x){ 
    UserSelectedEducationData.college_name = UserData.education[x].college_name;
    UserSelectedEducationData.description = UserData.education[x].description;
    return  viewIndex = x; 
  }


 


}