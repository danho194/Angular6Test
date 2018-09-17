import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const usersRoutes: Routes = [
  {path: '', component: UsersComponent},
  {path: ':userId', component: UserDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {
}
