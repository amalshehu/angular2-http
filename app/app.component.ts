import { Component, Type } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostService } from './post.service';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1><posts></posts>`,

})

export class AppComponent extends Type { }
