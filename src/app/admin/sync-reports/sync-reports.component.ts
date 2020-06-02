import { SyncService } from './../../services/sync.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-sync-reports',
  templateUrl: './sync-reports.component.html',
  styleUrls: ['./sync-reports.component.scss']
})
export class SyncReportsComponent implements OnInit {
  public loading: boolean;
  public syncReports: any[];
  public errorMessage: string;
  constructor(private syncService: SyncService) { }

  ngOnInit(): void {
    this.loading = true;
    this.syncService.getReports().subscribe((res: any) => {
      this.loading = false;
      if (res.success) {
        this.syncReports = res.syncReports;
        this.errorMessage = null;
      } else {
        this.errorMessage = res.message;
        this.syncReports = null;
      }
    });
  }

  calcDuration(s: Date, e: Date) {
    const end = moment(e);
    const start = moment(s);
    const duration = moment.duration(end.diff(start), 'ms');
    console.log('duration :', duration);
    return duration;
  }

}
