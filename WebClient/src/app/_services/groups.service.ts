import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Groups } from '../_models/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(private http: HttpClient) { }
    
  getAll() {
      // return this.http.get<User[]>(`${config.apiUrl}/users`);
      return this.http.get<Groups[]>(` http://localhost:5555/groups`);
  }
}