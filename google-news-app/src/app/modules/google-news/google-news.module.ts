import { NewsStore } from './shared/store';
import { ApiService } from './shared/api.service';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { GoogleNewsRoutingModule } from './google-news-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GoogleNewsRoutingModule,
    CoreModule
  ],
  declarations: [SearchComponent],
  providers: [
    ApiService,
    NewsStore
  ]
})
export class GoogleNewsModule { }
