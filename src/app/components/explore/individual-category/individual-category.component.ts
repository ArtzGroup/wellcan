import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { ExploreService } from '../explore.service';

@Component({
  selector: 'app-individual-category',
  templateUrl: './individual-category.component.html',
  styleUrls: ['./individual-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndividualCategoryComponent implements OnInit {
  categories: any;
  selectedCategory: any;
  lang: any;
  language: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exploreService: ExploreService
  ) {}

  ngOnInit() {
    this.categories = this.exploreService.categories;
    this.route.params.subscribe((params: Params) => {
      const paramId = {
        id: params.name,
      };
      const index = this.categories.findIndex((x) => x.id === paramId.id);
      if (index != -1) {
        this.selectedCategory = this.categories[index];
      }
      console.log(this.selectedCategory);
    });
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
}
