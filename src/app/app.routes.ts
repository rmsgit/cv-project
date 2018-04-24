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
import { CvSearchComponent } from './components/cv-search/cv-search.component';
import { RoleChooseComponent } from './components/role-choose/role-choose.component';
import { ViewApplyComponent } from './components/view-apply/view-apply.component';

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
    { path: 'jobs/view-job/:id', 
      component: SingleJobComponent 
    },

    { path: 'jobs/post-job', 
      component: PostJobComponent 
		},
		
		{ path: 'jobs/:page', 
      component: JobsComponent 
    },

		{ path: 'jobs/:page/:search', 
      component: JobsComponent 
    },

    { path: 'cv-builder', 
      component: CvBuilderComponent 
    },
    { path: 'cv-view/:id', 
      component: CvBuilderComponent 
    },

    { path: 'employer-dashboard', 
      component: EmployerDashboardComponent 
    },
 

    { path: 'jobseeker-dashboard', 
      component: JobseekerDashboardComponent 
    },

    { path: 'search-cv/:id', 
      component: CvSearchComponent 
    },
    { path: 'role-choose', 
      component: RoleChooseComponent 
    },
    { path: 'view-apply/:id', 
      component: ViewApplyComponent 
    },
    

];
