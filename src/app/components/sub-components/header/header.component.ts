import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../../../store/auth.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authStore: AuthStore
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authStore.auth = null;
    localStorage.clear();
  }

}
