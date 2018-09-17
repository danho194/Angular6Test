import { ApiService } from './api.service';
import { UsersResult, User } from "./model";

import { Injectable } from '@angular/core';
// import { Store } from 'rxjs-observable-store';

import {plainToClass} from "class-transformer";
import { Store } from '../../google-news/shared/base-store';
import { userInfo } from 'os';


@Injectable()
export class UsersStore extends Store<UsersResult> {

    constructor (private apiService: ApiService) {

        super(new UsersResult());
        this.activate();

    }

    loadUsers(): any {
        this.apiService.getUsers()
            .subscribe(
                result => {
                const typedResult = plainToClass(UsersResult, result as UsersResult);
                this.setState(
                    typedResult as UsersResult
                );
            },
            err => console.log("Error retrieving News Result from Search string ")
        );

    }

    setSelectedUser(id: string): void {
        this.setState({
            ...this.state, selectedUserId: +id
        });
    }
   // selectedUser: this.state.data.filter(user => user.id === +id)[0]
    getSelectedUser(): User {
        return this.state.data.filter(user => user.id === this.state.selectedUserId)[0];
    }

    updateUser(updatedUser: User): void {
        // updates state, here we could also call api to update and it could run in the background
        this.setState({
            ...this.state,
            data: this.state.data.map(user => {
              if (user.id === updatedUser.id) {
                return updatedUser;
              }
              return user;
            })
          });
    }


    private activate(): void {
        this.loadUsers();
    }
}
