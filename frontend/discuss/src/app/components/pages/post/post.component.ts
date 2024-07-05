import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  showOptions: boolean = false;
  post!: Post;

  constructor(
    activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['postId'])
        this.post = postService.getPostById(params['postId']);
    });
  }

  optionsClick() {
    this.showOptions = !this.showOptions;
  }
}
