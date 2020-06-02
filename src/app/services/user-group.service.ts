import { StandardResponse, UserGroupRoleLabel, UserGroupRoles } from './../interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserGroupRes } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  public roles: UserGroupRoleLabel[] = [
    { value: UserGroupRoles.user, label: 'User'},
    { value: UserGroupRoles.admin, label: 'Admin'}
  ];
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
    return this.http.get<UserGroupRes>(environment.apiUrl + `user-group/${id}`);
  }

  getUsers(id): Observable<UserGroupRes> {
    return this.http.get<UserGroupRes>(environment.apiUrl + `user-group/${id}/users`);
  }

  removeUser(userGroupId, userId): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `user-group/${userGroupId}/user/${userId}/remove`, {});
  }

  addUser(userGroupId, email, role): Observable<StandardResponse> {
    return this.http.post<StandardResponse>(environment.apiUrl + `user-group/${userGroupId}/user/add`, {email, role});
  }

  editUserRole(userGroupId, editUserId, role): Observable<StandardResponse> {
    return this.http.put<StandardResponse>(environment.apiUrl + `user-group/${userGroupId}/user/${editUserId}/role/${role}/edit`, {});
  }
}
