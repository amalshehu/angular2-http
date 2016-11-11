import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Post} from './post';
@Injectable()
export class PostService{
  private posts;
  constructor(){
    this.posts = [
      {
        title:'Post One',
        body:'This is the body for post one'
      },
      {
        title:'Post Two',
        body:'This is the body for post Two'
      },
      {
        title:'Post Three',
        body:'This is the body for post Three'
      }
    ];
  }

  getPosts(){
    return this.posts;
  }
  addPost(newPost){
    this.posts.push(newPost);
  }
}
