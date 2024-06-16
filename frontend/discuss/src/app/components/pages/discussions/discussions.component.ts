import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { sample_topics } from 'src/data';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css'],
})
export class DiscussionsComponent {
  topics = sample_topics.sort((a, b) => b.postsAmount - a.postsAmount);
}
