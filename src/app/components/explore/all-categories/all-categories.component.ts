import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExploreService } from '../explore.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AllCategoriesComponent implements OnInit {
  categories: any;
  dataSubscription: any;
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

  onReadArticle(id: number) {
    this.router.navigate(['./articleVideo', id], {
      relativeTo: this.route.parent,
    });
  }

  cleanHTML(html) {
    let newHTML = html;
    if (html && window.innerWidth <= 640) {
      newHTML = html.replace(/<(?:.|\n)*?>/gm, '');
      newHTML = newHTML.slice(0, 40) + '...';
    } else {
      newHTML = html.replace(/<(?:.|\n)*?>/gm, '');
      newHTML = newHTML.slice(0, 130) + '...';
    }
    return newHTML;
  }

  // getEnglishCategories() {
  //   return this.otherService.getHomePageJSON().subscribe(
  //     data => {
  //       this.categories = data.contents["en-CA"].categories;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  //   console.log(this.categories);
  //   //return this.categories;
  // }

  // getFrenchCategories() {
  //  return this.otherService.getHomePageJSON().subscribe(
  //     data => {
  //      this.categories = data.contents["fr-CA"].categories;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  //   console.log(this.categories);
  //   //return this.categories;
  // }
}
