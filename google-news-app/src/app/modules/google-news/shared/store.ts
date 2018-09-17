import { ApiService } from './api.service';


import { NewsResult, Article } from "./model";
import { Store } from './base-store';
import { Injectable } from '@angular/core';



@Injectable()
export class NewsStore extends Store<NewsResult> {

    constructor (private apiService: ApiService) {
        // private apiService: ApiService
        super(new NewsResult());
    }

    search(searchString: string): any {
        this.apiService.getNewsBySearchString(searchString)
            .subscribe(
                result => {
               // const newsResult = result as NewsResult;

                this.setState(
                    result as NewsResult
                   // new NewsResult()
                );
            },
            err => console.log("Error retrieving News Result from Search string ")
        );

    }
    }
