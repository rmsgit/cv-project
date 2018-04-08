import {Routes} from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SingleJobComponent } from './components/single-job/single-job.component';
import { PostJobComponent } from './components/post-job/post-job.component';



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

    { path: 'jobs/:page', 
      component: JobsComponent 
    },

    { path: 'jobs/view-job/:id', 
      component: SingleJobComponent 
    },

     { path: 'jobs/post-job', 
      component: PostJobComponent 
    }  
];
