import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../../store/auth.store';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';

@Component({
  selector: 'app-jobseeker-dashboard',
  templateUrl: './jobseeker-dashboard.component.html',
  styleUrls: ['./jobseeker-dashboard.component.css']
})
export class JobseekerDashboardComponent implements OnInit {

  public path = new CallerPath();

  public applyJoblist: Array<any>;
  public userID:string = localStorage.uid;
  constructor(
    public authStore: AuthStore,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
      let ref = this.db.list(this.path.jobs.myApply()).valueChanges().subscribe((res)=>{
        console.log(res);
        this.applyJoblist = JSON.parse(JSON.stringify(res));
        ref.unsubscribe();
      })
  }


}
