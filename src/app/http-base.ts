import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class HttpBase {

  constructor( protected http: HttpClient) {}

   protected  extractData(res: Object): any {
    return res;
  }

  protected handleError(error: any) {

    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    const mymsg = JSON.parse(error._body).error.message;
    return Observable.throw(mymsg);
  }


  protected get(url: string) {
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }

  protected post(url: string, postData: any):  Observable<any[]> {
    return this.http
    .post(url, postData)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
