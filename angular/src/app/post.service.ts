import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  /** GET posts from server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }
  
  /** GET post by id from server */
  getPost(id: string): Observable<Post> {
    const url = `${this.postsUrl}/${id}`
    return this.http.get<Post>(url)
  }
}
