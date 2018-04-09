import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

import { JobModel } from '../../models/job.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { Router } from '@angular/router';
import { NotificationHelper } from '../../helper/notification.helper';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  job:JobModel = new JobModel();

  public path = new CallerPath();
  constructor(
    private db: AngularFireDatabase,
    private message: NotificationHelper,
    private route: Router
  ) { }

  ngOnInit() {
    if(sessionStorage.job_preview){
      this.job = JSON.parse(sessionStorage.job_preview);
    }

    $('#example1').calendar({
      onChange:(date, text)=> {
          this.job.close_date = text;
      },
    });

  }

  onSubmit(data){
    console.log(this.job);
    this.db.list(this.path.jobs.all)
    .push(this.job)
    .then((res)=> {
      console.log(res)
      sessionStorage.clear();
      this.message.successMessage("Saved", "Successful saved.");
      //this.route.navigateByUrl("/jobs/view-job/"+ res.key)
      this.route.navigateByUrl("/jobs/0");
      
    
    })
  }

  onPreview(){
    sessionStorage.job_preview = JSON.stringify(this.job);
    this.route.navigateByUrl("/jobs/view-job/preview")
  }
}
