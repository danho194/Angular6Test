import { Component, OnInit } from '@angular/core';
import { UsersStore } from '../../shared/user-store';
import { User } from '../../shared/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public usersStore: UsersStore,  private router: Router) { }

  ngOnInit() {}

  onClickUserDetails(user: User): void {

      this.router.navigate(['/' + user.id]);
    }
  }


