import {Component} from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
    templateUrl: 'coordinator.component.html',
    styleUrls: ['../shipper/shipper.component.scss', 'coordinator.component.scss']
})
export class CoordinatorComponent {
    detailVisible: boolean;
    deleteShipperConfirmPopup: boolean;
    constructor(private dashbordService: DashboardService) {
        dashbordService.viewTitle.next('Manage Coordinator');
    }
    handleShipper() {
        this.detailVisible = true;
        this.deleteShipperConfirmPopup = false;
    }
    deleteShipper() {
        this.deleteShipperConfirmPopup = true;
    }
    closeForm(e) {
        e.preventDefault();
        this.detailVisible = false;
    }
}
