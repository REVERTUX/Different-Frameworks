import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient) { }
  
  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`
    return this.http.get<User>(url)
  }
}
