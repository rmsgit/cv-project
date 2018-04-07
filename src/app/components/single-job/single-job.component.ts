import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { JobModel } from '../../models/job.model';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent implements OnInit {

  public path = new CallerPath();
  public job: JobModel =  new JobModel();
  constructor(
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let jobID = params['id'];
      if(jobID == 'preview'){
        this.job = JSON.parse(sessionStorage.job_preview);
      }else{
        this.db.object(this.path.jobs.byId(jobID)).valueChanges().subscribe((res)=>{
          this.job = JSON.parse(JSON.stringify(res));
        });
      }
     
    });
  }

}
