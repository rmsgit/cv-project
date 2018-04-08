import {Routes} from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SingleJobComponent } from './components/single-job/single-job.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { CvBuilderComponent } from './components/cv-builder/cv-builder.component';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';
import { JobseekerDashboardComponent } from './components/jobseeker-dashboard/jobseeker-dashboard.component';



export const AppRoutes: Routes = [
  	{ path: 'profile', 
    	component: PageNotFoundComponent 
  	},

  	{ path: '', 
    	component: HomeComponent 
  	},

   	{ path: 'sign-up', 
    	component: SignUpComponent 
  	},

  	{ path: 'login', 
    	component: LoginComponent 
  	},

    { path: 'jobs', 
      component: JobsComponent 
    },

    { path: 'jobs/view-job/:id', 
      component: SingleJobComponent 
    },

    { path: 'jobs/post-job', 
      component: PostJobComponent 
    },

    { path: 'cv-builder', 
      component: CvBuilderComponent 
    },

    { path: 'employer-dashboard', 
      component: EmployerDashboardComponent 
    },


    { path: 'jobseeker-dashboard', 
      component: JobseekerDashboardComponent 
    },
    

];
