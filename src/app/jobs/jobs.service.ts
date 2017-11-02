import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IJobs} from './ijobs';
@Injectable()
export class JobService {
  _baseUrl = 'http://ppswtest.azurewebsites.net/api/values';
  constructor(private http: HttpClient) {}
  getJobs(): Observable<IJobs[]> {
    return this.http.get(this._baseUrl)
      .catch(err => Observable.throw(err.json()));
  }
}
