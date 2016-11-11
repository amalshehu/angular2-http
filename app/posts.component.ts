import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
    selector: 'posts',
    template: `<h1>Posts</h1>`
})
export class PostsComponent {
  private posts;
  constructor(private _postService:PostService){
    this.posts = _postService.getPosts();
  }
}
