import { Component } from '@angular/core';
import { PostService } from './post.service';
import {Post} from './post';

@Component({
    selector: 'posts',
    template: `<h1>Posts</h1>
              <form (submit) ="addPost()">
              <label>Title</label>
              <input [(ngModel)]="title" name="title">
              <br>
              <label>Body</label>
              <input [(ngModel)]="body" name="body">
              <br>
              <input type = "submit" value = "Submit">
              </form>
              <ul>
              <li *ngFor="let post of posts">
              <h3>{{post.title}}</h3>
              <p>{{post.body}}
              </li>
              </ul>
    `
})
export class PostsComponent {
  private posts:Post[];
  private title;
  private body;
  private newPost;
  constructor(private _postService:PostService){
    this._postService.getPosts().subscribe(posts =>{
      this.posts = posts;
    });
  }
  addPost(){

  this.newPost = {
    title:this.title,
    body:this.body
  }
  this._postService.addPost(this.newPost);
  }
}
