import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';
import { SearchBarComponent } from './containers/search-bar/search-bar.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NewsStore } from '../modules/google-news/shared/store';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  declarations: [HeaderComponent, SearchBarComponent],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    

  ],
  providers: [
    NewsStore
  ]

})
export class CoreModule { }
