import { Component, OnInit } from '@angular/core'; 
import { CvBuilderComponent } from "../cv-builder.component";

@Component({
  selector: 'app-edit-cv-header',
  templateUrl: './edit-cv-header.component.html',
  styleUrls: ['./edit-cv-header.component.css']
})
export class EditCvHeaderComponent implements OnInit {


	//UserData : any = this.cv.UserData;


  constructor(public cv: CvBuilderComponent) { }

  ngOnInit() {
  }


  

}
