export class Post {
  id!: string;
  owner!: string;
  topic!: string;
  createdAt!: string;
  title!: string;
  description?: string;
  imageUrl?: string;
  votes!: number;
  commentCount!: number;
  //   comments!: commentmodelarray
}
