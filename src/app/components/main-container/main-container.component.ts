import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(
    public authStore: AuthStore
  ) { }

  ngOnInit() {
    if(localStorage.auth_store) this.authStore.auth = JSON.parse(localStorage.auth_store)  
  }

}
