import { Post } from './app/shared/models/Post';

export const sample_posts: Post[] = [
  {
    postId: '1',
    owner: 'Daniel',
    topic: 'Fashion',
    createdAt: '1',
    title: 'Lowkey I could win the triple crown if I tried.',
    imageUrl:
      'assets/low-key-i-could-win-the-triple-crown-if-i-tried-v0-0jou6vensz1d1.jpg',
    votes: 26,
    commentCount: 127,
    comments: [
      { author: 'Daniel', text: 'Cool!', createdAt: '3' },
      {
        author: 'Ivan',
        text: "To be fair, I think you could count the number of people who understood the lore from a single playthrough on 0 hands (it's 0). Its great because it's hidden, it takes some unpicking, but the world feels all the more real for the little hints you stumble on during your first playthrough. I really do doubt that anybody figured out the underlying plot first time through though, and 99% of players watch the mossbag (or similar) summary to understand it properly!",
        createdAt: '1',
      },
    ],
  },
  {
    postId: '2',
    owner: 'Daniel',
    topic: 'Gaming',
    createdAt: '3',
    title: 'What is your favourite game?',
    description:
      "Hey guys, what's your favorite game of all time? I'm currently stuck on a decision between The Last of Us and Overwatch. Has anyone else played either of those? And what do you think makes them so great?",
    votes: 119,
    commentCount: 242,
    comments: [],
  },
  {
    postId: '3',
    owner: 'Ivan',
    topic: 'Food',
    createdAt: '3',
    title: 'What is your favourite food?',
    description:
      "Hey guys, what's your favorite food of all time? I'm currently stuck on a decision between Spaghetti and Meatballs. Has anyone else played either of those? And what do you think makes them so great?",
    votes: 119,
    commentCount: 242,
    comments: [],
  },
];

export const sample_topics = [
  {
    id: '1',
    topicName: 'Fashion',
    banner:
      'https://styles.redditmedia.com/t5_2qhoq/styles/bannerBackgroundImage_lxwobe69dtyc1.png',
    postsAmount: 127,
  },
  {
    id: '2',
    topicName: 'Gaming',
    banner:
      'https://styles.redditmedia.com/t5_2qh03/styles/bannerBackgroundImage_j84aqdq3eyd91.png',
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
