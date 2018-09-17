import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersStore } from '../../shared/user-store';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersResult, User } from '../../shared/model';

@Component({
  selector: 'app-user.details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  form: FormGroup;
  firstName = new FormControl('');
  lastName = new FormControl('');

  constructor(private activatedRoute: ActivatedRoute, public usersStore: UsersStore, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activate();
  }

  onSubmit() {
    // this could propably be done differently and better
    const user = this.cloneObject(this.usersStore.getSelectedUser()) as User;
    user.first_name = this.form.value.firstName;
    user.last_name = this.form.value.lastName;
    this.usersStore.updateUser(user);
  }

  private activate(): void {
    this.setUser();
    this.createForm();
    this.subscribeUsersData();
  }

  private setUser(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.usersStore.setSelectedUser(userId);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      'firstName': this.firstName,
      'lastName': this.lastName,
    });
  }

  private subscribeUsersData(): void {
    this.usersStore.state$.subscribe(state => {
        // const user = (state as UsersResult).selectedUser as User;
        const user = this.user = this.usersStore.getSelectedUser();
        this.form.setValue({firstName: user.first_name, lastName: user.last_name});
      });
  }


  // temp for deepcloning
    private cloneObject(obj) {
      const clone = {};
      for (const i in obj) {
          if (obj[i] != null &&  typeof(obj[i]) === 'object') {
              clone[i] = this.cloneObject(obj[i]);
          } else {
              clone[i] = obj[i];
          }
      }
      return clone;
  }
}
