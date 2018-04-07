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
}