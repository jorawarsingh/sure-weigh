import {Component} from '@angular/core';
import {ShipperService} from './shipper.service';
import {IShipper} from './ishipper';

@Component({
  selector: 'app-shipper',
  templateUrl: 'shipper.component.html',
  styleUrls: ['shipper.component.css']
})
export class ShipperComponent {
  shippers: IShipper[];
  constructor(private shipperService: ShipperService) {
    this.shipperService.getShipperData().subscribe(
      shippers => {
        this.shippers = shippers;
      },
          err => console.log(err)
      );
  }
}
