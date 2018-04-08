import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { MainStoreService } from '../../store/main.store';
import { JobModel } from '../../models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public path = new CallerPath();
  public countyList  = [];
  public cityList = [];
  constructor(
    private db: AngularFireDatabase,
    public store: MainStoreService
  ) { 

  }



  ngOnInit() {
    this.db.object(this.path.jobs.all).valueChanges().subscribe((res)=>{
          this.store.jobs = new Array<JobModel>();
          this.store.filterJobs = new Array<JobModel>();
          var jobIds =  Object.keys(res)
          for (let jobId of jobIds){
            var job: JobModel = res[jobId];
            job.id =  jobId;
            this.store.jobs.push(job);
            this.store.filterJobs.push(job);
            if(job.residence_location) this.store.currentCuntries[job.residence_location] = false;
            if(job.location) this.store.currentCities[job.location] = false;
            
          }
          this.countyList = Object.keys(this.store.currentCuntries);
          this.cityList = Object.keys(this.store.currentCities);
    })
    
    
  
    try {
      window['accordionInit']();
    }catch(ex){}
    
  }

  filterByCompanyName(companyName){
    this.store.filterJobs =  this.store.jobs
                  .filter(job => job.company_name === companyName);
  }

  reset(){
    this.ngOnInit();
  }

}
