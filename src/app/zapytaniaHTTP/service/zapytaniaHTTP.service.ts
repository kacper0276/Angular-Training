import { Injectable } from '@angular/core';
import { Post } from '../zapytaniaHTTP.component';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ZapytaniaHTTPService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  //   Czytanie z parametrów ?userId=1 itd
  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        params: param,
      }
    );
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
  }

  deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  changePost(post: Post) {
    return this.http.patch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
  }

  // Async z obsługą błędów
  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();

  getPostsAsync() {
    return this.http
      .get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (posts) => {
          this.postsObs.next(posts);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
