import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { TopicService } from 'src/app/services/topic.service';
import { Post } from 'src/app/shared/models/Post';
import { Topic } from 'src/app/shared/models/Topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent {
  topic!: Topic;
  posts!: Post[];

  constructor(
    activatedRoute: ActivatedRoute,
    private topicService: TopicService,
    private postService: PostService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['topicName'])
        topicService
          .getTopicByName(params['topicName'])
          .subscribe((serverTopic) => {
            this.topic = serverTopic;
          });
      postService
        .getAllPostsByTopicName(params['topicName'])
        .subscribe((serverPosts) => {
          console.log(serverPosts);
          this.posts = serverPosts;
        });
    });
  }
}
