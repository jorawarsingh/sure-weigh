import {Component} from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
    templateUrl: 'driver.component.html',
    styleUrls: ['../shipper/shipper.component.scss', 'driver.component.scss']
})
export class DriverComponent {
    detailVisible: boolean;
    deleteShipperConfirmPopup: boolean;
    constructor(private dashbordService: DashboardService) {
        dashbordService.viewTitle.next('Manage Driver');
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
