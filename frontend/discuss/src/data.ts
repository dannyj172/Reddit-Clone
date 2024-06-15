import { Post } from './app/shared/models/Post';

export const sample_posts: Post[] = [
  {
    id: '1',
    owner: 'Daniel',
    topic: 'Fashion',
    createdAt: '1',
    title: 'Lowkey I could win the triple crown if I tried.',
    imageUrl:
      'assets/low-key-i-could-win-the-triple-crown-if-i-tried-v0-0jou6vensz1d1.jpg',
    votes: 26,
    commentCount: 127,
  },
  {
    id: '2',
    owner: 'Daniel',
    topic: 'Gaming',
    createdAt: '3',
    title: 'What is your favourite game?',
    description:
      "Hey guys, what's your favorite game of all time? I'm currently stuck on a decision between The Last of Us and Overwatch. Has anyone else played either of those? And what do you think makes them so great?",
    votes: 119,
    commentCount: 242,
  },
];
