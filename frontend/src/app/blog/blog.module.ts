import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './components/post/post.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    BlogComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ButtonModule,
    FontAwesomeModule
  ]
})
export class BlogModule { }
