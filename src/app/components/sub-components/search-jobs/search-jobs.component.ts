import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainStoreService } from '../../../store/main.store';


@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  title: string = "";
  city: string ="";
  search: string = "";


  constructor(
    public store: MainStoreService,
    public router: Router,
    private aRouter: ActivatedRoute
  ) {
    
   }

  ngOnInit() {
    this.aRouter.params.subscribe((params)=>{
      if(params.search){
        this.title = params.search;
        this.search = params.search;
        this.onSearch({
          value: this.title
        })
      }
    })
  }
  onSearch(data){
    console.log(data.value);
    console.log(this.store)
    this.store.filterJobs =  this.store.jobs
                                        .filter( (job) => { 
                                            try{
                                              return (
                                                !job.isFiled
                                              )
                                              
                                            }catch(e){}  
                                          } )
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
        this.router.navigateByUrl('/jobs/0/'+this.search);
        this.search = "";
  }

}
