import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './pages/search/search.component';
const searchRoutes: Routes = [
  {path: 'news', component: SearchComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class GoogleNewsRoutingModule {
}
