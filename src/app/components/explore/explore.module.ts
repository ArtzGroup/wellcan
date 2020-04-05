import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExploreComponent } from './explore.component';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';
import { IndividualCategoryComponent } from './individual-category/individual-category.component';
import { ArticleVideoComponent } from './article-video/article-video.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { ExploreRoutingModule } from './explore.router.module';
//import { SearchedArticlesComponent } from './searched-articles/searched-articles.component';

// search module
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { TranslateModule } from '@ngx-translate/core';
//import { SafePipe } from 'pipes/safe.pipe';
//import { DesktopModule } from '../desktop.module';
//import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    SecondaryNavigationComponent,
    AllCategoriesComponent,
    IndividualCategoryComponent,
    ArticleVideoComponent,
    ExploreComponent,
    //SearchedArticlesComponent,
  ],

  exports: [],

  imports: [
    CommonModule,
    ExploreRoutingModule,
    //MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    //Ng2SearchPipeModule,
    //SharedModule,
  ],

  providers: [],
})
export class ExploreModule {}
