import {Component} from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
    templateUrl: 'shipper.component.html',
    styleUrls: ['shipper.component.scss']


})
export class ShipperComponent {
    detailVisible: boolean;
    deleteShipperConfirmPopup: boolean;
    constructor(private dashbordService: DashboardService) {
        dashbordService.viewTitle.next('Manage Shippers');
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
