import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IJobs} from './ijobs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class JobService {
  _baseUrl = 'http://ppswtest.azurewebsites.net/api/values';
  jobHandlerPopUp: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}
  getJobs(): Observable<IJobs[]> {
    return this.http.get(this._baseUrl)
      .catch(err => Observable.throw(err.json()));
  }
}
