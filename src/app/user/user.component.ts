import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {
  user: User = {
    id: null,
    name: null
  }
  selectedUser: User = null;
  userList: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  createUser(): void {
    this.userService.create(this.user).then(res => {
      this.getUsers()
    });

  }

  getUsers(): void {
    this.userService.getUsers().then(userList => this.userList = userList);
  }


  deleteUser(selectedUser: User): void {
    this.userService.delete(selectedUser.id).then(() => {
      this.userList = this.userList.filter(u => u !== selectedUser);
      this.selectedUser=null;
    });
  }

  goDetail(selectedUser: User): void {
    this.selectedUser = selectedUser;
    console.log(selectedUser);
  }

  updateUser(): void {
    this.userService.update(this.selectedUser).then(res => {
      this.getUsers();
      this.selectedUser=null;
    });
  }
}
