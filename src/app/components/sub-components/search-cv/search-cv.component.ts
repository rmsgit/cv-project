import { Component, OnInit } from '@angular/core';
import { MainStoreService } from '../../../store/main.store';

@Component({
  selector: 'app-search-cv',
  templateUrl: './search-cv.component.html',
  styleUrls: ['./search-cv.component.css']
})
export class SearchCvComponent implements OnInit {
  

  name: string;
  city: string;
  constructor(
    public store: MainStoreService
  ) { }

  ngOnInit() {
  }


  onSearch(data){
    console.log(data);
  }

}
