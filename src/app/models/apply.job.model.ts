import { UserModel } from "./user.model";

export class ApplyJobModel{
    date:string;
    userId: string;
    auth: UserModel;
    cover_letter: string;
    online_resume: string;
    video_resume: string;
    cd: string;
    
    constructor(){
        this.date = Date();
        this.userId =  localStorage.uid;
    }
}