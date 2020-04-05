import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { IndividualCategoryComponent } from './individual-category/individual-category.component';
import { ArticleVideoComponent } from './article-video/article-video.component';
//import { SearchedArticlesComponent } from './searched-articles/searched-articles.component';


const exploreRoutes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
        { path: '', redirectTo: 'allCategories', pathMatch: 'full'},
          { path: 'allCategories', component: AllCategoriesComponent },
          { path: 'individualCategory/:name', component: IndividualCategoryComponent },
          //{ path: 'articleVideo/:name/:id', component: ArticleVideoComponent },
          { path: 'articleVideo/:id', component: ArticleVideoComponent },
          //{ path: 'searchedArticles/:name', component: SearchedArticlesComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(exploreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExploreRoutingModule {}
