/**
 * Created by Ruwan on 11/27/2017
 */
import Axios from 'axios';
import { Injectable } from '@angular/core';
import {CallerPath} from  './caller.path';
import { AuthStore } from '../store/auth.store';
import { Router } from '@angular/router';

@Injectable()
export class BaseCaller {

  public axios = Axios;
  public api = new CallerPath();

  constructor(
      public authStore: AuthStore,
      public router: Router
  ) { 
    //this.axios.defaults.baseURL = this.api.base;
    //this.axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    //this.axios.defaults.headers.post['Content-Type'] = 'application/x'
  }

  /**
   * @param {string} path
   * @param {string} data
   * @returns
   * @memberof BaseService
   */
  get(path, data) {
    return new Promise((resolve, reject) => {
      this.setHeader();
      this.axios
        .get(path, { params: data })
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }

  /**
   * @param {string} path
   * @param {string} data
   * @returns
   * @memberof BaseService
   */
  post(path, data) {
    return new Promise((resolve, reject) => {
      this.setHeader();
      this.axios
        .post(path, data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }


   /**
   * @param {string} path
   * @param {string} data
   * @returns
   * @memberof BaseService
   */
  delete(path, data) {
    return new Promise((resolve, reject) => {
      this.setHeader();
      this.axios
        .delete(path, data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }



  /**
   * @param {string} path
   * @param {string} data
   * @returns
   * @memberof BaseService
   */
  getPublic(path, data) {
    return new Promise((resolve, reject) => {
      this.axios
        .get(path, data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }

  /**
   * This is without token
   * @param {string} path
   * @param {string} data
   * @returns
   * @memberof BaseService
   */
  postPublic(path, data) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(path, data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }
  
  setHeader() {
    if(localStorage.token)  this.axios.defaults.headers.common['Authorization'] = localStorage.token;
    else this.router.navigateByUrl('/sign-in')
    // JSON.parse(atob(localStorage.auth)).token;
  }

}
