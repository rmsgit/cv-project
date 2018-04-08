import { Injectable } from '@angular/core';
import { JobModel } from '../models/job.model';

@Injectable()
export class MainStoreService {

    jobs: Array<JobModel>
    filterJobs: Array<JobModel>
    currentCuntries: object;
    currentCities: object;

    constructor() { 
        this.jobs = new Array<JobModel>();
        this.filterJobs = new Array<JobModel>();
        this.currentCuntries = {};
        this.currentCities= {};
    }

    getJobs(index){
        console.log(index)
        let returnArray = new Array<JobModel>();
        let endIndex = index*15+15;
        if(endIndex > this.filterJobs.length) endIndex = this.filterJobs.length;
        for(let i=index*15; i < endIndex; i++){
            returnArray.push(this.filterJobs[i])
        }
        return returnArray;
    }
}