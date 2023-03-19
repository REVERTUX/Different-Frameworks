import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor() {}
  
  @Input() id!: String
  @Input() title!: String
  @Input() body!: String

}
