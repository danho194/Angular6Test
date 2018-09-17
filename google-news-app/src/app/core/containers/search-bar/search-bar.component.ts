import { NewsStore } from '../../../modules/google-news/shared/store';
import {FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  newsFormControl: FormControl;

  constructor(private newsStore: NewsStore) {
    //private newsprivate newsStore: NewsStoreStore: NewsStore
   }

  ngOnInit() {
    if (!this.newsStore) {
      return;
    }
    this.newsStore.search('bitcoin');
    this.newsStore.state$.subscribe(state => {
      let t = state;
      t;
    });
  }

}
