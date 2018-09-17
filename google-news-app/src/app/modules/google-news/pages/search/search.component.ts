import { NewsStore } from '../../shared/store';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {

  constructor(public newsStore: NewsStore) { }

  ngOnInit() {
    // if (!this.newsStore) {
    //   return;
    // }
    // this.newsStore.state$.subscribe(state => {
    //   let t = state;
    //   t;
    // });
  }

}
