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

export const sample_topics = [
  {
    id: '1',
    topicName: 'Fashion',
    banner: '',
    postsAmount: 127,
  },
  {
    id: '2',
    topicName: 'Gaming',
    banner: '',
    postsAmount: 150,
  },
  {
    id: '3',
    topicName: 'Comedy',
    banner: '',
    postsAmount: 112,
  },
  {
    id: '4',
    topicName: 'Music',
    banner: '',
    postsAmount: 15,
  },
  {
    id: '5',
    topicName: 'Art',
    banner: '',
    postsAmount: 19,
  },
  {
    id: '6',
    topicName: 'Cinema',
    banner: '',
    postsAmount: 96,
  },
  {
    id: '7',
    topicName: 'Food',
    banner: '',
    postsAmount: 279,
  },
  {
    id: '8',
    topicName: 'News',
    banner: '',
    postsAmount: 115,
  },
  {
    id: '9',
    topicName: 'Technology',
    banner: '',
    postsAmount: 54,
  },
];
