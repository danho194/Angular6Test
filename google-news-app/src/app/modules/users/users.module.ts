import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersStore } from './shared/user-store';
import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { ApiService } from './shared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsersComponent, UserDetailsComponent],
  providers: [
    ApiService,
    UsersStore
  ]
})
export class UsersModule { }
