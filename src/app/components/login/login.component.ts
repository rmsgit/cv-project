import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserModel } from '../../models/user.model';
import { AuthStore } from '../../store/auth.store';
import { Router } from '@angular/router';
import { NotificationHelper } from '../../helper/notification.helper';
import { CallerPath } from '../../caller/caller.path';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../sign-up/sign-up.component.css', './login.component.css']
})


export class LoginComponent implements OnInit {

  public path = new CallerPath();

  email: string;
  password: string;
  constructor(
    private auth: AngularFireAuth,
    private message: NotificationHelper,
    private db: AngularFireDatabase,
    private store: AuthStore,
    private router: Router
  ) {

   }

  ngOnInit() {}

  emailLogin(f){
    this.auth.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((res)=>{
      console.log(res);
      localStorage.uid = res.user.uid;
      this.db.object(this.path.user.current_user.profile()).valueChanges().subscribe((user)=>{
        if(!user){
          this.message.errorMessage("Fail to login", "Your emai canot find. Please sign-up first.")
        }else{
          this.store.auth = JSON.parse(JSON.stringify(user))
          localStorage.auth_store = JSON.stringify(this.store.auth)
          this.router.navigateByUrl('/role-choose')
        }
      })
    })
    .catch((error)=>{
      this.message.errorMessage("Fail", error.message);
    })
  }

  gmailLogin(){
    let  signInRef = this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( (res)=>{

      let gUser = res.user;
      localStorage.uid = gUser.uid;

      
      let ref = this.db.object(this.path.user.current_user.profile()).valueChanges().subscribe(
      (user)=>{
        console.log(user)
        if(!user){
            this.message.errorMessage("Fail to login", "Your emai canot find. Please sign-up first.")
        }else{
          
          this.store.auth =JSON.parse(JSON.stringify(user));
          // for(let applyKey of Object.keys( newUser.apply)) applyArray.push(newUser.apply[applyKey]);
          // this.store.auth.apply = applyArray;
          localStorage.auth_store = JSON.stringify(this.store.auth)
          ref.unsubscribe();
          this.router.navigateByUrl('/role-choose')

         
        }
      })
  //    .catch( (res)=>{console.error(res)  })

      
    })
    .catch( (res)=>{console.error(res)  })
  }


}
