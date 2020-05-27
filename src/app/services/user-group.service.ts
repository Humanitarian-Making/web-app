import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserGroupRes } from '../interfaces';

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

  get(id): Observable<UserGroupRes> {
    console.log('id :', id);
    return this.http.get<UserGroupRes>(environment.apiUrl + `user-group/${id}`);
  }
}
