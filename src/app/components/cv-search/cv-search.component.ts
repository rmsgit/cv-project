import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { JobModel } from '../../models/job.model';
import { NotificationHelper } from '../../helper/notification.helper';

@Component({
  selector: 'app-cv-search',
  templateUrl: './cv-search.component.html',
  styleUrls: ['./cv-search.component.css']
})
export class CvSearchComponent implements OnInit {

  public path = new CallerPath();

  public applicationList: Array<JobModel>;
  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    
  ) {
    this.route.params.subscribe(params => {
      let id = params['id']; 
      console.log(id)
      this.db.list(this.path.jobs.applyById(id)).valueChanges().subscribe((list)=>{
        console.log(list)
        this.applicationList = JSON.parse(JSON.stringify(list));
      });

   });
   }

  ngOnInit() {
  }



}
