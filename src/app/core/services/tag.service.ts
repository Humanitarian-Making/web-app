import { Injectable } from '@angular/core';
import { CreateTagObject, CreateRootTagObject, LanguageOption } from '../../interfaces';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(
    private http: HttpClient,
  ) { }

  async createTag(tag: CreateTagObject) {
    this.http.post(environment.apiUrl + 'tag/create', { tag })
      .subscribe(x => console.log(x));
  }

  async createRootTag(rootTag: CreateRootTagObject) {
    console.log('createRootTag: ', rootTag, environment.apiUrl);
    this.http.post(environment.apiUrl + 'tag/createRoot',
      { rootTag })
      .subscribe(x => x);
  }

  getTag(tagId) {
    return this.http.get(environment.apiUrl + `tag/` + tagId);
  }

  getSelectable() {
    return this.http.get(environment.apiUrl + `tags/selectable`);
  }

  getRootTags() {
    return this.http.get(environment.apiUrl + `rootTags`);
  }

  getAllParentTags() {
    return this.http.get(environment.apiUrl + `tag/parents`);
  }

  getChildren(parentId) {
    return this.http.get(environment.apiUrl + `tag/` + parentId + '/children');
  }

  getOfType(type) {
    return this.http.get(environment.apiUrl + `tag/type/` + type );
  }

  getEditableTag(tagId) {
    return this.http.get(environment.apiUrl + `tag/${tagId}/edit`);
  }

  editName(tagId: string, names: LanguageOption[]) {
    return this.http.put(environment.apiUrl + `tag/${tagId}/edit/name`, {name: names});
  }

  editDesc(tagId: string, descs: LanguageOption[]) {
    return this.http.put(environment.apiUrl + `tag/${tagId}/edit/desc`, {desc: descs});
  }

  editSelectable(tagId: string, selectable: boolean) {
    return this.http.put(environment.apiUrl + `tag/${tagId}/edit/selectable`, {selectable});
  }
}
