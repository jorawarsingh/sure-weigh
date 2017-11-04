import {Component} from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
    templateUrl: 'company.component.html',
    styleUrls: ['../shipper/shipper.component.scss', 'company.component.scss']
})
export class CompanyComponent {
    detailVisible: boolean;
    deleteShipperConfirmPopup: boolean;
    constructor(private dashbordService: DashboardService) {
        dashbordService.viewTitle.next('Manage Company');
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
