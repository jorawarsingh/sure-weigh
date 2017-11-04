import {Component} from '@angular/core';
import {DashboardService} from '../../dashboard/dashboard.service';

@Component({
    selector: 'sw-job-handler',
    templateUrl: 'job-handler.component.html',
    styleUrls: ['job-handler.component.scss' , '../jobs.component.scss']
})
export class JobHandlerComponent {
    selectingShipper: boolean;
    selectingDriver: boolean;
    constructor(private dashboardService: DashboardService) {}
    closeJobHandler() {
        this.dashboardService.jobPopupHandler.next(false);
    }
    openDriverPopup(e) {
        e.preventDefault();
        this.selectingDriver = true;
    }
    closeDriverPopup(e) {
        e.preventDefault();
        this.selectingDriver = false;
    }
    openShipperPopup(e) {
        e.preventDefault();
        this.selectingShipper = true;
    }
    closeShipperPopup(e) {
        e.preventDefault();
        this.selectingShipper = false;
    }
}
