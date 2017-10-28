import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {IShipper} from './ishipper';
@Injectable()
export class ShipperService {
  _baseUrl = 'http://ppswtest.azurewebsites.net/api/values';
  constructor(private http: HttpClient) {}
  getShipperData(): Observable<IShipper[]> {
    return this.http.get(this._baseUrl)
      .catch(err => Observable.throw(err.json()));
  }
}
