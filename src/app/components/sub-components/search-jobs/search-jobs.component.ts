import { Component, OnInit } from '@angular/core';
import { MainStoreService } from '../../../store/main.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  title: string = "";
  city: string ="";


  constructor(
    public store: MainStoreService,
    public router: Router
  ) {
    
   }

  ngOnInit() {
  }
  onSearch(data){
    console.log(data.value);
    console.log(this.store)
    this.store.filterJobs =  this.store.jobs
                                        .filter( (job) => { 
                                            try{
                                              return (
                                                (-1 != job.title.toLowerCase().search(this.title.toLowerCase())))
                                                  || 
                                                (-1 != job.company_name.toLowerCase().search(this.title.toLowerCase())
                                              )
                                              
                                            }catch(e){}  
                                          } )
                                      
                                        .filter( (job) => { 
                                          try{
                                            return -1 != job.residence_location.toLowerCase().search(this.city.toLowerCase())
                                          }catch(ex){}
                                          
                                        
                                        })
        
        ;
        this.router.navigateByUrl('/jobs/0');
  }

}
