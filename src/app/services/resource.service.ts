import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StandardResponse, UserGroupRes } from '../interfaces';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  public resourceTypes = [
    {
      value: 'challenge',
      label: 'Challenge'
    }
  ];
  constructor(private http: HttpClient) { }
  addResource(userGroupId, resource): Observable<UserGroupRes> {
    return this.http.post<UserGroupRes>(`${environment.apiUrl}user-group/${userGroupId}/resource/add`, {resource});
  }

  deleteResource(userGroupId, resourceId): Observable<UserGroupRes> {
    return this.http.put<UserGroupRes>(`${environment.apiUrl}user-group/${userGroupId}/resource/${resourceId}/delete`, {});
  }

  getUserGroupResources(userGroupId): Observable<UserGroupRes> {
    return this.http.get<UserGroupRes>(`${environment.apiUrl}user-group/${userGroupId}/resources`);
  }

  editName(userGroupId, resourceId, name): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(
      `${environment.apiUrl}user-group/${userGroupId}/resource/${resourceId}/name/${name}`, { });
  }

  editDesc(userGroupId, resourceId, descId, language, text): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(
      `${environment.apiUrl}user-group/${userGroupId}/resource/${resourceId}/desc/${descId}/edit`, { language, text });
  }

  addDesc(userGroupId, resourceId, language, text): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(
      `${environment.apiUrl}user-group/${userGroupId}/resource/${resourceId}/desc/add`, { language, text });
  }

  deleteDesc(userGroupId, resourceId, descId): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(
      `${environment.apiUrl}user-group/${userGroupId}/resource/${resourceId}/desc/${descId}/delete`, { });
  }
}
