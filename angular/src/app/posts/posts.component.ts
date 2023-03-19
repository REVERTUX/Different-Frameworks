import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(private postService: PostService) {}

  posts: Post[] = []

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts)
  }

}
