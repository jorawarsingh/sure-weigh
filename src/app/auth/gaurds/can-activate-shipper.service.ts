import {Injectable} from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CanActivateShipper implements CanLoad {
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return false;
    }
}
