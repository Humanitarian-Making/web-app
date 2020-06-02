import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor( private http: HttpClient) { }

  sync() {
    return this.http.get(environment.apiUrl + 'sync/projects', {});
  }

  getReports() {
    return this.http.get(environment.apiUrl + 'sync/reports', {});
  }
}
