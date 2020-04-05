import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExploreService } from './explore.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  articleRead: boolean;
  subscription: Subscription;
  lang: any;
  language: boolean = true;

  constructor(private exploreService: ExploreService) {}

  ngOnInit() {}
}
