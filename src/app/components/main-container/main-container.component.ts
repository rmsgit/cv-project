import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../../store/auth.store';
import { MainStoreService } from '../../store/main.store';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  public path = new CallerPath();

  constructor(
    public authStore: AuthStore,
    public store: MainStoreService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    if(localStorage.auth_store) {
      this.authStore.auth = JSON.parse(localStorage.auth_store)
      let ref =  this.db.list(this.path.jobs.all).valueChanges().subscribe((res)=>{
        this.store.filterJobs =  JSON.parse(JSON.stringify(res));
      })
    }  
  }

}
