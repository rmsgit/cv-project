import { Component, OnInit, NgModule } from '@angular/core';

declare var jquery:any;
declare var $ :any;

import { JobModel } from '../../models/job.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import { Router } from '@angular/router';
import { NotificationHelper } from '../../helper/notification.helper';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase/app'
import 'firebase/storage'
import { DateHelper } from '../../helper/date.helper';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})

export class PostJobComponent implements OnInit {

  job:JobModel = new JobModel();
  fileSrc:any;
  isUploading: boolean =  false;

  public path = new CallerPath();

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };


  constructor(
    private db: AngularFireDatabase,
    private message: NotificationHelper,
    private route: Router,
    private firebase: FirebaseApp,
    public dateHelper: DateHelper
  ) { }

  ngOnInit() {
    if(sessionStorage.job_preview){
      this.job = JSON.parse(sessionStorage.job_preview);
    }

    $('#example1').calendar({
      type: 'date',
      onChange:(date, text)=> {
          this.job.close_date = this.dateHelper.getDateString(date);
          console.log(this.job.close_date);
      },
    });

    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)

  }

  onSubmit(data){
    console.log(this.job);
    this.db.list(this.path.jobs.all)
    .push(this.job)
    .then((res)=> {
      console.log(res)
      sessionStorage.clear();
      this.message.successMessage("Saved", "Successful saved.");
      //this.route.navigateByUrl("/jobs/view-job/"+ res.key)
      this.route.navigateByUrl("/jobs/0");
      
    
    })
  }

  onPreview(){
    sessionStorage.job_preview = JSON.stringify(this.job);
    this.route.navigateByUrl("/jobs/view-job/preview")
  }
  upload(event){

    this.isUploading = true;
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.fileSrc = files[0];
    console.log(this.fileSrc);
    const storageRef = this.firebase.storage().ref().child(`jobs_images/${localStorage.uid}${Date.now()}`);
    storageRef.put(this.fileSrc).then((res)=>{
      
      console.log("Upload success",res.downloadURL);
      this.job.imageURL  = res.downloadURL;
      this.isUploading = false;
    })


  }



  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
    this.job.descriptionText = text;
  }
}

