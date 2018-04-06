import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
 
  public openModal(event: any): void {
 
        $('#apply_job').modal({
	    	centered: false
	  	}).modal('show', {allowMultiple: false});

    }
 

}
