import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  faLinkedin =faLinkedin;
  posts: Post[] = [
   
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}

