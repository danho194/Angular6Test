import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AppConfig} from './config/app.config';
// import {SearchComponent} from './modules/pages/search/search.component';
// import {HomePage} from './core/pages/home/home.page';
// import {Error404Page} from './core/pages/error404/error404.page';

const routes: Routes = [
  // todo: lazy loading paths not working well
  {path: '', redirectTo: '/' + 'users', pathMatch: 'full'},

 {path: 'users', loadChildren: './modules/users/users.module#UsersModule'}
  // {path: 'news', loadChildren: './modules/google-news.module#GoogleNewsModule'}
////   {path: AppConfig.routes.error404, component: Error404Page},
// {path: AppConfig.routes.heroes, loadChildren: './modules/heroes/heroes.module#HeroesModule'},

// otherwise redirect to 404
// {path: '**', redirectTo: '/' + AppConfig.routes.error404}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
