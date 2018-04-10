import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { JobModel } from '../../models/job.model';
import { AuthStore } from '../../store/auth.store';
import { ApplyJobModel } from '../../models/apply.job.model';
import { NotificationHelper } from '../../helper/notification.helper';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})

export class SingleJobComponent implements OnInit {

  public path = new CallerPath();
  public job: JobModel =  new JobModel();
  public applyJob: ApplyJobModel =  new ApplyJobModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    public authStore: AuthStore,
    public messgae: NotificationHelper,
    private db: AngularFireDatabase
  ) {

   }

  ngOnInit() {
    
    
    this.applyJob.auth = this.authStore.auth;
    this.activatedRoute.params.subscribe((params) => {
      let jobID = params['id'];
      
      if(jobID == 'preview'){
        this.job = JSON.parse(sessionStorage.job_preview);
      }else{
        this.db.object(this.path.jobs.byId(jobID)).valueChanges().subscribe((res)=>{
          this.job = JSON.parse(JSON.stringify(res));
          this.job.id = jobID;
        });
      }
    });
  }
 
  public openModal(event: any): void {
    $('#apply_job').modal({
      centered: false
    }).modal('show', {allowMultiple: false});
  }

  apply(){
    console.log(this.applyJob)
    console.log(this.path.jobs.applyById(this.job.id));
    this.db.list(this.path.jobs.applyById(this.job.id)).push(this.applyJob)
    .then((res)=>{
      console.log(res)
      $('#apply_job').modal({
        centered: false
      }).modal('hide');
      this.db.list(this.path.jobs.myApply()).push({
        title: this.job.title,
        date: Date(),
        job_id: this.job.id,
        apply_id: res.key
      })
      this.messgae.successMessage("Sent", "Succesfully job applied")
    })
    
  }
 

}
