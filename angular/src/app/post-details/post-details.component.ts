import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  constructor(private route: ActivatedRoute, private postService: PostService, private userService: UserService) { }

  @Input() post?: Post
  @Input() user?: User

  ngOnInit(): void {
    this.getPost()
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) return
    this.postService.getPost(id).subscribe(post =>{
      this.post = post
      this.getUser(post.id)
    })
  }

  getUser(id: string): void {
    this.userService.getUser(id).subscribe(user => this.user = user)
  }
}
