import { StandardResponse, LanguageOption } from '../../interfaces';
import { LanguageService } from './language.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projects: any[] = [];
  public currentProject = null;
  public editProjectId = null;
  public projects$ = new Subject();

  constructor(
    private languageService: LanguageService,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getProject(projectId) {
    return this.http.get(environment.apiUrl + `project/${projectId}`);
  }

  getProjects(lastProject?) {
    return this.http.get(environment.apiUrl + 'projects');
  }

  filterByProjectTags(tagIds: string[]) {
    return this.http.put(environment.apiUrl + 'projects/filter', {tags: tagIds});
  }

  addTagToProject(projectId, tagId) {
    return this.http.put(environment.apiUrl + 'project/' + projectId + '/tag/' + tagId + '/add', {});
  }

  removeTag(projectId, tagId) {
    return this.http.put(environment.apiUrl + 'project/' + projectId + '/tag/' + tagId + '/remove', {});
  }

  async sync() {
    this.http.get(environment.apiUrl + 'projects/sync', {})
      .subscribe(x => console.log('Sync: ', x));
  }

  getProjectToEdit(projectId): Observable<any> {
    return this.http.get(environment.apiUrl + 'project/' + projectId + '/edit', {});
  }

  editName(projectId: string, names: LanguageOption[]): Observable<any> {
    return this.http.put(environment.apiUrl + `project/${projectId}/edit/name`, {name: names});
  }

  editDesc(projectId: string, descs: LanguageOption[]) {
    return this.http.put(environment.apiUrl + `project/${projectId}/edit/desc`, {desc: descs});
  }

}

