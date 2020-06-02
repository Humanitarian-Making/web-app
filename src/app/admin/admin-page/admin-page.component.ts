import { SyncService } from './../../services/sync.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private syncService: SyncService) { }

  ngOnInit(): void {
  }

  sync() {
   this.syncService.sync().subscribe((res) => {
     console.log('res: ', res);
   });
  }

}
