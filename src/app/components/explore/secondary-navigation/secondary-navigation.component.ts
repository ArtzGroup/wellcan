import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  Input,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreService } from '../explore.service';
//import { ArticleSearchService } from '../../services/article-search.service';
import { Location } from '@angular/common';
import {
  debounceTime,
  map,
  filter,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-secondary-navigation',
  templateUrl: './secondary-navigation.component.html',
  styleUrls: ['./secondary-navigation.component.scss'],
})
export class SecondaryNavigationComponent implements OnInit {
  //@ViewChild('inputBox', {static: false}) inputBox: ElementRef;

  //@Input() searchTerm: string;

  categories: any;
  focusSearch = false;
  lang: any;
  language: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exploreService: ExploreService
  ) {}

  ngOnInit() {
    this.categories = this.exploreService.categories;
  }
}
