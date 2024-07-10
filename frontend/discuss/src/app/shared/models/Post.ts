import { Comment } from './Comment';

export class Post {
  postId!: string;
  owner!: string;
  topic!: string;
  createdAt!: string;
  title!: string;
  description?: string;
  imageUrl?: string;
  votes!: number;
  comments!: Comment[];
}
