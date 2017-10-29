import {Component} from '@angular/core';
import {JobService} from './jobs.service';
import {IJobs} from './ijobs';

@Component({
    selector: 'sw-shipper',
    templateUrl: 'jobs.component.html',
    styleUrls: ['jobs.component.scss']
})
export class JobsComponent {
    jobs: IJobs[];
    jobHandler: boolean;
    jobDetailPopup: boolean;
    jobDetail: IJobs;

    constructor(private jobService: JobService) {
        this.jobService.getJobs().subscribe(
            jobs => {
                this.jobs = jobs;
            },
            err => console.log(err)
        );
    }

    closeJobHandler() {
        this.jobHandler = false;
    }

    openJobHandler() {
        this.jobHandler = true;
    }

    openJobDetail(job) {
        this.jobDetailPopup = true;
        this.jobDetail = job;
    }

    closeJobDetail() {
        this.jobDetailPopup = false;
        this.jobDetail = null;
    }
}
