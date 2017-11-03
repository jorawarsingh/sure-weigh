import {Injectable} from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CanActivateAdmin implements CanLoad {
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
