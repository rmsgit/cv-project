/**
 * Created by Ruwan on 11/27/2017.
 */
export class CallerPath {
  base = "http://35.189.174.171:8080/BLink_BE/api/";
  auth = {
    login: this.base + 'users/auth'
  }

  user = {
    list: {
      driver: this.base +  "users?role=driver",
      customers: this.base + "customers",
      reps:this.base + 'reps'
    }
  }
  releaseOrder = {
    list: this.base +'release_orders',
    one:(id) => this.base + 'release_orders/' + id,
    lines:(orderID) => this.base + 'release_orders/' + orderID + '/lines',
    lineDelete: (orderId, lineId) => this.base + 'release_orders/' + orderId + '/lines/'+ lineId,
  }

}
