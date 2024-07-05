import { Injectable } from '@angular/core';
import { Post } from '../shared/models/Post';
import { sample_posts } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAll(): Post[] {
    return sample_posts;
  }

  getAllPostsByTopicName(topicName: string): Post[] {
    return this.getAll().filter((post) =>
      post.topic.toLowerCase().includes(topicName.toLowerCase())
    );
  }

  getAllPostsBySearchTerm(searchTerm: string): Post[] {
    return this.getAll().filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getPostById(id: string): Post {
    return this.getAll().find((post) => post.postId == id) ?? new Post();
  }
}
