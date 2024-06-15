import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) {
    this.posts = postService.getAll();
  }
}
