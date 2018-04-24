import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationHelper } from '../../helper/notification.helper';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallerPath } from '../../caller/caller.path';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/user.model';
import { AuthStore } from '../../store/auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  name:string;
  email: string;
  password: string;
  password2: string;
  isAccept: boolean;
  
  user: UserModel;

  public path = new CallerPath();
  constructor(
    private auth: AngularFireAuth,
    private message: NotificationHelper,
    private db: AngularFireDatabase,
    private store: AuthStore,
    private router: Router
  ) { }

  ngOnInit() {}

  emailSignUp(data){
    console.log(data);
    if(data.valid){
      if(this.password == this.password2){
        this.auth.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((res)=>{

          console.log(res);
          let uid = res.uid
          localStorage.uid = uid;
          this.db.object(this.path.user.current_user.profile())
          .set({
            name: this.name,
            email: this.email
          })
          .then((res)=>{
            this.router.navigateByUrl('/role-choose');
            this.message.successMessage("Success", "You created")

          })
          .catch((error)=>{
            this.message.errorMessage("Fail", error.message);
          })
          
        })
        .catch((error)=>{
          this.message.errorMessage("Fail", error.message);
        })
      }else this.message.errorMessage ("Password Error", "Passwords does not match")
    }else {
      if(this.isAccept){
        this.message.errorMessage ("Error", "All the fields are required")
      }else  this.message.errorMessage ("Error", "You have to agree with ")
    } 
  }


  gmailLogin(){
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( (res)=>{

      let gUser = res.user;
      localStorage.uid = gUser.uid;

      
      this.db.object(this.path.user.current_user.profile()).valueChanges().subscribe((user)=>{
        if(!user){
          let newUser = {
            name:gUser.displayName,
            email: gUser.email,
            photoURL: gUser.photoURL
          }

          this.db.object(this.path.user.current_user.profile()).set(newUser)
          .then((res)=>{
            this.store.auth =  JSON.parse(JSON.stringify(newUser));
            this.router.navigateByUrl('/role-choose');
          })
          .catch((error)=>{
            this.message.errorMessage("Fail", error.message);
          })
        }else{
          this.store.auth = JSON.parse(JSON.stringify(user))
          this.router.navigateByUrl('/role-choose')
        }
      })
    })
    .catch( (res)=>console.error(res)  )
  }


}
