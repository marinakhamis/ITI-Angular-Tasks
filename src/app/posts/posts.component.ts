import { Component, OnInit } from '@angular/core';
import { PostsService } from './../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {
  postsList:any;
  errorMsg:any;
  constructor(private postsService: PostsService) { }
  ngOnInit(): void {
    this.postsService.getposts().subscribe(
      posts =>
      {
      this.postsList=posts;
    },
    error=>{
      this.errorMsg=error;
    })
  }

}

