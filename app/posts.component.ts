import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
    selector: 'posts',
    template: `<h1>Posts</h1>
              <ul>
              <li *ngFor="let post of posts">
              <h3>{{post.title}}</h3>
              <p>{{post.body}}
              </li>
              </ul>
    `
})
export class PostsComponent {
  private posts;
  constructor(private _postService:PostService){
    this.posts = _postService.getPosts();
  }
}
