import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExploreService } from '../explore.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-video',
  templateUrl: './article-video.component.html',
  styleUrls: ['./article-video.component.scss'],
})
export class ArticleVideoComponent implements OnInit {
  selectedArticle: any;
  selectedCategory: any;
  articleID;
  articleType = '';
  categories: any;
  lang: any;

  constructor(
    private exploreService: ExploreService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    //this.exploreService.setArticleRead(true);
  }

  onGoBack() {
    this.location.back();
  }

  ngOnInit() {
    this.categories = this.exploreService.categories;
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      // console.log(categories);
      for (let index = 0; index < this.categories.length; index++) {
        let category = this.categories[index];
        let indexId = category.articles.findIndex((x) => x.id == params.id);
        if (indexId != -1) {
          this.selectedCategory = category;
          this.selectedArticle = category.articles[indexId];
          this.articleType = category.articles[indexId].type;
          break;
        }
      }
    });
    // this.lang = this.storageManager.getData(DBkeys.LANGUAGE);
    // this.languageService.languageChanged$.subscribe(lang => this.lang = lang);

    // if (this.lang === "en") {
    //   this.getEnglishCategories()
    // }
    // if (this.lang === "fr") {
    //   this.getFrenchCategories()
    // }
  }

  //ngOnDestroy() {
  //  this.exploreService.setArticleRead(false);
  //}

  // getEnglishCategories() {
  //   return this.otherService.getHomePageJSON().subscribe(
  //     (data) => {
  //       this.categories = data.contents['en-CA'].categories;
  //       this.route.params.subscribe((params: Params) => {
  //         console.log(params);
  //         // console.log(categories);
  //         for (let index = 0; index < this.categories.length; index++) {
  //           let category = this.categories[index];
  //           let indexId = category.articles.findIndex((x) => x.id == params.id);
  //           if (indexId != -1) {
  //             this.selectedCategory = category;
  //             this.selectedArticle = category.articles[indexId];
  //             this.articleType = category.articles[indexId].type;
  //             break;
  //           }
  //         }
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  //   //console.log(this.categories);
  //   //return this.categories;
  // }

  // getFrenchCategories() {
  //   return this.otherService.getHomePageJSON().subscribe(
  //     (data) => {
  //       this.categories = data.contents['fr-CA'].categories;
  //       this.route.params.subscribe((params: Params) => {
  //         console.log(params);
  //         // console.log(categories);
  //         for (let index = 0; index < this.categories.length; index++) {
  //           let category = this.categories[index];
  //           let indexId = category.articles.findIndex((x) => x.id == params.id);
  //           if (indexId != -1) {
  //             this.selectedCategory = category;
  //             this.selectedArticle = category.articles[indexId];
  //             this.articleType = category.articles[indexId].type;
  //             break;
  //           }
  //         }
  //       });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  //   //console.log(this.categories);
  //   //return this.categories;
  // }
}
