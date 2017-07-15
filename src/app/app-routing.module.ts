import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {UserDetailComponent} from "./user/user.detail.component";


const routes: Routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: 'user',  component: UserComponent },
    { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
