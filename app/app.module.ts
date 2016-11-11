import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { PostsComponent } from './posts.component';
import { PostService } from './post.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PostsComponent ],
  providers:[ PostService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
