import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MainStoreService } from '../../store/main.store';
import { CallerPath } from '../../caller/caller.path';
import { JobModel } from '../../models/job.model';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {

  public path = new CallerPath();
  public myPostedJobs: Array<JobModel> = new Array<JobModel>();
  public applyLength: Object = {};
  constructor(
    private db: AngularFireDatabase,
    public store: MainStoreService,
    public authStore:AuthStore
  ) {
    
      this.db.object(this.path.jobs.all).valueChanges().subscribe((data)=>{
        for(let id of Object.keys(data)){
          let job: JobModel = JSON.parse(JSON.stringify(data[id]));
          job.id = id;
          if(job.meta.userId == localStorage.uid){
            this.myPostedJobs.push(job);
            this.applyLength[id] = 0;
            this.db.list(this.path.jobs.applyById(id)).valueChanges().subscribe((aply)=>{
              this.applyLength[id] =aply.length;
            })
          }
          
        }
        console.log(this.myPostedJobs);
      })
    
   }

  ngOnInit() {
    
  }

}
