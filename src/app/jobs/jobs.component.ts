import {Component} from '@angular/core';
import {ShipperService} from './jobs.service';
import {IJobs} from './ijobs';

@Component({
  selector: 'sw-shipper',
  templateUrl: 'jobs.component.html',
  styleUrls: ['jobs.component.scss']
})
export class JobsComponent {
  shippers: IJobs[];
  constructor(private shipperService: ShipperService) {
    this.shipperService.getShipperData().subscribe(
      shippers => {
        this.shippers = shippers;
      },
          err => console.log(err)
      );
  }
}
