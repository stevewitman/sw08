import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Project } from './project.model';

const BASE_URL = 'https://bb-base-server.herokuapp.com';
const MODEL = 'projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  findOne(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this.getUrlWithId(id));
  }

  create(project: Project): Observable<Project[]> {
    return this.httpClient.post<Project[]>(this.getUrl(), project);
  }

  update(project: Project): Observable<Project[]> {
    return this.httpClient.patch<Project[]>(this.getUrlWithId(project.id), project);
  }

  delete(project: Project): Observable<Project[]> {
    return this.httpClient.delete<Project[]>(this.getUrlWithId(project.id));
  }

  private getUrl() {
    return `${BASE_URL}/${MODEL}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
