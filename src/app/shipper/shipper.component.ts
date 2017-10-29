import {Component} from '@angular/core';

@Component({
    templateUrl: 'shipper.component.html',
    styleUrls: ['shipper.component.scss']


})
export class ShipperComponent {
    detailVisible: boolean;
    deleteShipperConfirmPopup: boolean;
    handleShipper() {
        this.detailVisible = true;
        this.deleteShipperConfirmPopup = false;
    }
    deleteShipper() {
        this.deleteShipperConfirmPopup = true;
    }
}
