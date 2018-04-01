/**
 * Created by Ruwan on 11/28/2017.
 */
export class DateHelper {
    getDateString(dateString: string){
        let date = new Date(dateString);
        return [date.getFullYear(), date.getMonth(), date.getDate()].join("/")
    }

    getTimeString(timeString: string){
        let date = new Date(timeString);
        return [date.getHours(), date.getMinutes()].join(" : ")
    }
    
  }
  