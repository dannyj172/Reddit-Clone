import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.posts = this.postService.getAllPostsBySearchTerm(
          params['searchTerm']
        );
      } else {
        this.posts = postService.getAll();
      }
    });
  }
}
