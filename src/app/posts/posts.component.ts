import { Component, OnInit } from '@angular/core';
import { PostsService } from './../Services/posts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {
  postsList:any;
  errorMsg:any;
  constructor(private postsService: PostsService, private router:Router) { }
  openComments(post:any){
    //Navigate to comments of a post using its ID 
    this.router.navigate(["/posts"])
  }

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

