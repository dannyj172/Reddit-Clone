import { Injectable } from '@angular/core';
import { sample_topics } from 'src/data';
import { Topic } from '../shared/models/Topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  constructor() {}

  getAll(): Topic[] {
    return sample_topics;
  }

  getAllTopicsBySearchTerm(searchTerm: string): Topic[] {
    return this.getAll().filter((topic) =>
      topic.topicName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getTopicByName(name: string): Topic {
    return (
      this.getAll().find((topic) => topic.topicName == name) ?? new Topic()
    );
  }
}
