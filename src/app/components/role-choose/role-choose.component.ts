import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-choose',
  templateUrl: './role-choose.component.html',
  styleUrls: ['./role-choose.component.css']
})
export class RoleChooseComponent implements OnInit {

  public path: CallerPath = new CallerPath();

  public ROLES = {
    EMPLOYEE: "EMPLOYEE",
    JOB_SEEKER: "JOB_SEEKER"
  }

  public isViewOptions: boolean = false;
  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  ngOnInit() {

    let ref = this.db.object(this.path.user.current_user.profile()).valueChanges().subscribe((res)=>{
      let profile = JSON.parse(JSON.stringify(res)); 
      if(this.ROLES.EMPLOYEE == profile.role) this.router.navigateByUrl('/employer-dashboard');
      else if(this.ROLES.JOB_SEEKER == profile.role) this.router.navigateByUrl('/jobseeker-dashboard');
      else this.isViewOptions = true;
    })
  }

  onSelectRole(type){
    this.db.object(this.path.user.current_user.profile())
    .update({
      role:type
    })
    .then(()=>{
      if(this.ROLES.EMPLOYEE == type) this.router.navigateByUrl('/employer-dashboard');
      if(this.ROLES.JOB_SEEKER == type) this.router.navigateByUrl('/jobseeker-dashboard');
    })
  }


}
