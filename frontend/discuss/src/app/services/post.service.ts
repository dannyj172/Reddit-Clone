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
}
