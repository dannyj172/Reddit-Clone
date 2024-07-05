import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';
import { Topic } from 'src/app/shared/models/Topic';
import { sample_topics } from 'src/data';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css'],
})
export class DiscussionsComponent implements OnInit {
  topics: Topic[] = [];
  constructor(private topicService: TopicService) {
    this.topics = this.topicService.getAll();
  }

  ngOnInit(): void {}
}
