export class JobModel{
    id: string;
    title: string;
    job_category:string;
    job_sub_category:string;
    company_name:string;
    location:string;
    email:string;
    close_date:string;
    salery_range:string;
    description:string;
    descriptionText:string;
    career_level:string;
    years_of_experience:string;
    residence_location:string;
    gender:string;
    degree:string;
    age:string;
    skills:string;
    benifits:string;
    imageURL: string;
    meta: Meta;

    isFiled:boolean;
    
    constructor(){
        this.meta = new Meta();

    }

}

class Meta{
    date:string;
    userId: string;
    
    constructor(){
        this.date = Date();
        this.userId =  localStorage.uid;
    }
}