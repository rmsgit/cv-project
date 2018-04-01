import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routes";

import { BaseCaller } from "./caller/caller.basic";
import { CallerPath } from "./caller/caller.path";

import { DateHelper } from './helper/date.helper';
import { NotificationHelper } from './helper/notification.helper';
import { AuthCaller } from './caller/auth.caller';
import { AuthStore } from './store/auth.store';


import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/sub-components/footer/footer.component';
import { HeaderComponent } from './components/sub-components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SingleJobComponent } from './components/single-job/single-job.component';
import { SearchJobsComponent } from './components/sub-components/search-jobs/search-jobs.component'; 






@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainContainerComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    JobsComponent,
    SingleJobComponent,
    SearchJobsComponent, 
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    SuiModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [ RouterModule ],
  providers: [
    /**
     * Calllers
     */
    BaseCaller,
    CallerPath,
    AuthCaller,
      /**
     * Store
     */
    AuthStore,
    /**
     * Helpers
     */
    DateHelper,
    NotificationHelper,

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
