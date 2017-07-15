import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {UserService} from "./user.service";
import {User} from "./user";


@Component({
  selector: 'user-detail',
  template: ' ' +
  '<div *ngIf="user">' +
  '<h1>user detail</h1>' +
  '<h2>id:{{user.id}}</h2>' +
  '<h2><input type="text" [(ngModel)]="user.name"></h2>' +
  '<button (click)="updateUser(true); $event.stopPropagation()">update</button></div>'
})
export class UserDetailComponent implements OnInit {

  @Output() onUpdate = new EventEmitter<boolean>();

  updateUser(update: boolean) {
    this.onUpdate.emit(update);
  }

  selectedUser: User;
  @Input() userList: User[];

  @Input()
  set user(selectedUser: User) {
    this.selectedUser = selectedUser;
  }

  get user(): User {
    return this.selectedUser;
  }


  constructor(private userService: UserService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

}
