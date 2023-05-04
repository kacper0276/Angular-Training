import { Component } from '@angular/core';
import { ZapytaniaHTTPService } from './service/zapytaniaHTTP.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-zapytaniaHTTP',
  templateUrl: './zapytaniaHTTP.component.html',
})
export class zapytaniaHTTPComponent {
  constructor(private httpService: ZapytaniaHTTPService) {}

  // Async Pipe (zobacz w component.html | async)
  allPosts$: Observable<Array<Post>>;

  // Dodatkowa obsługa błędów
  getPosts() {
    this.httpService.getPosts().subscribe(
      (posts) => {
        console.log(posts);
      },
      (err: HttpErrorResponse) => {
        console.log(err.status);
      }
    );

    this.allPosts$ = this.httpService.getPosts();
  }

  getPostsAsync() {
    this.allPosts$ = this.httpService.posts$;
  }

  getPost() {
    this.httpService.getPost(1).subscribe((post) => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe((posts) => {
      console.log(posts);
    });
  }

  addPost() {
    const post: Post = {
      userId: 1,
      title: 'tytuł',
      body: 'nowy wpis',
    };

    this.httpService.addPost(post).subscribe((res) => {
      console.log(res);
    });
  }

  updatePost() {
    const post: Post = {
      userId: 1,
      id: 1,
      title: 'tytuł',
      body: 'nowy zmieniony wpis',
    };

    this.httpService.updatePost(post).subscribe((res) => {
      console.log(res);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe((res) => {
      console.log(res);
    });
  }

  changePost() {
    const p: Post = {
      id: 1,
      body: 'Zmieniam tylko wpis',
    };

    this.httpService.changePost(p).subscribe((post) => {
      console.log(post);
    });
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
