import { Component, OnInit } from '@angular/core';
import { CvBuilderComponent } from "../cv-builder.component";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  	index: number =  this.cv.UserSelectedPortfolioData.index;
  	UserSelectedPortfolioData : any =  this.cv.UserSelectedPortfolioData;

  	constructor(public cv: CvBuilderComponent) { }

  ngOnInit() {
  }

  changeDetails(event) : void{
 
 	this.index = this.cv.UserSelectedPortfolioData.index;  
  	this.cv.UserData.portfolio[this.index].title = this.UserSelectedPortfolioData.title;
  	this.cv.UserData.portfolio[this.index].subtitle = this.UserSelectedPortfolioData.subtitle;
  	this.cv.UserData.portfolio[this.index].description = this.UserSelectedPortfolioData.description;
  	this.cv.UserData.portfolio[this.index].show_description = this.UserSelectedPortfolioData.show_description;
 
  }


   public addPortfolio() : void{
    this.cv.addPortfolio();
  }

  public removePortfolio() : void{
    this.cv.removePortfolio();
  }

   home(){
     $('.editable').removeClass('active');
     $('app-edit-settings').addClass('active');
  }

}
