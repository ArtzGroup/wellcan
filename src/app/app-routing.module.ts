import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FaqComponent } from './components/faq/faq.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Page' } },

  { path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
  {
    path: 'downloadapp',
    component: DownloadAppComponent,
    data: { title: 'Download App' },
  },
  { path: 'faq', component: FaqComponent, data: { title: 'Faq Questions' } },
  {
    path: 'support',
    component: SupportComponent,
    data: { title: 'Support Section' },
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./components/explore/explore.module').then(
        (mod) => mod.ExploreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
