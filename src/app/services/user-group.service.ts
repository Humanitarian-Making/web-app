import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor(private http: HttpClient) { }

  updateResourceUser(type, id, newUserGroupId ) {
    if (type === 'tag') {
      return this.http.put(environment.apiUrl + `tag/${id}/edit/userGroup`, {userGroupId: newUserGroupId});
    } else if (type === 'project') {
      return this.http.put(environment.apiUrl + `project/${id}/edit/userGroup`, {userGroupId: newUserGroupId});
    } else {
      return null;
    }
  }
}
