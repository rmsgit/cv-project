/**
 * Created by Ruwan on 11/27/2017.
 */


export  class CallerPath {
  base = "http://35.189.174.171:8080/BLink_BE/api/";
  auth = {
    login: this.base + 'users/auth'
  }

  user = {
    current_user:{
      profile: ()=>{ if(localStorage.uid) { return '/users/profile/' + localStorage.uid } else return ""}
    }
  }

  jobs = {
    all: '/jobs',
    byId: (jobId)=>  '/jobs/' + jobId,
    applyById: (jobId)=>  '/apply_jobs/' + jobId,
    myApply: ()=>{ if(localStorage.uid) { return '/users/profile/' + localStorage.uid + '/apply' } else return ""}
  }


}