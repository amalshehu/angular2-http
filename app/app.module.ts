import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

import { PostsComponent } from './posts.component';
import { PostService } from './post.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule, JsonpModule],
  declarations: [ AppComponent, PostsComponent ],
  providers:[ PostService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
