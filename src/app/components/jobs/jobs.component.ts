import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { MainStoreService } from '../../store/main.store';
import { JobModel } from '../../models/job.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public path = new CallerPath();
  public countyList  = [];
  public cityList = [];

  public isCountrySelectAll:boolean = false;
  public isCitySelectAll:boolean = false;

  public page: number = 0;
  constructor(
    private db: AngularFireDatabase,
    public store: MainStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe(params => {
      this.page = parseInt(params['page']); // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }



  ngOnInit() {

    this.db.object(this.path.jobs.all).valueChanges().subscribe((res)=>{
           this.store.jobs = new Array<JobModel>();
           this.store.filterJobs  = new Array<JobModel>();
          var jobIds =  Object.keys(res).reverse();
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
              try {
                throw  window['accordionInit']();
              }catch(ex){}
    })

    
  }

  filterByCompanyName(companyName){
    this.store.filterJobs =  this.store.jobs
                  .filter(job => job.company_name === companyName);
  }


  filterBy(key, allowed = [], src) {
    return src
        .filter( (job) => {
          console.log(allowed.includes(job[key]), job[key])
          return allowed.includes(job[key])
        })
  }



  reset(){
    this.ngOnInit();
  }

  onFilterClick(){
    let allowedCountries = [];
    let allowedCities= [];
    this.isCitySelectAll = false;
    this.isCountrySelectAll = false;

    this.store.filterJobs = this.store.jobs;
    for(let c of Object.keys(this.store.currentCuntries)) if(this.store.currentCuntries[c]) allowedCountries.push(c);
    for(let c of Object.keys(this.store.currentCities)) if(this.store.currentCities[c]) allowedCities.push(c);
    if(allowedCountries.length) this.store.filterJobs = this.filterBy('residence_location', allowedCountries, this.store.jobs);
    if(allowedCountries.length){
      if(allowedCities.length) this.store.filterJobs = this.filterBy('location', allowedCities, this.store.filterJobs)
    }else{
      if(allowedCities.length) this.store.filterJobs = this.filterBy('location', allowedCities, this.store.jobs)
    }
    console.log(this.store)
  }
  countrySelectAll() {
   if(this.isCountrySelectAll) for(let c of Object.keys(this.store.currentCuntries)) this.store.currentCuntries[c] =true; else for(let c of Object.keys(this.store.currentCuntries)) this.store.currentCuntries[c] =false;
   this.onFilterClick()
  }
  citySelectAll() {
    if(this.isCitySelectAll) for(let c of Object.keys(this.store.currentCities)) this.store.currentCities[c] =true; else for(let c of Object.keys(this.store.currentCities)) this.store.currentCities[c] = false;
    this.onFilterClick()
  }
 
  nextPage(){
   this.router.navigate(['/jobs', this.page+1])
  }
  backPage(){
    if(this.page>0) this.router.navigate(['/jobs', this.page-1])
   }

}
