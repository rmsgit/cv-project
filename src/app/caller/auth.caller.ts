/**
 * Created by Ruwan on 11/28/2017.
 */
import {Injectable} from "@angular/core";
import {BaseCaller} from "./caller.basic";
@Injectable()
export class AuthCaller {
  constructor(
    public call: BaseCaller,
  ) {  }
  
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
        this.call.postPublic(this.call.api.auth.login, {username: username, password: password})
          .then(result => resolve(result))
          .catch(err => reject(err));
      });
  }
}
