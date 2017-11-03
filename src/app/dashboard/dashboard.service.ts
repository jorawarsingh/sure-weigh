import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DashboardService {
    jobPopupHandler: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
