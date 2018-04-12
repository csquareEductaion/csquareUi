import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {Injectable} from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers} from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CommonTemplateUsedService {
  constructor(private http:Http) {

   }
   addLead(data:any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
   return this.http.post(`${environment.serverUrl}/addLead`, data, options);
    }
    getAllRefCites(): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefCites/-1/-1`).map(req => req.json());
    }  
    getAllRefGrades(): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.serverUrl}/getAllRefGrades`).map(req => req.json());
    } 
    searchLocationByCity(): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
      return this.http.get(`${environment.serverUrl}/searchLocationByCity/5`, options).map(req => req.json());
      }
}

export interface CommonTemplate {

}
