import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path : 'home', component: HomeComponent
},
{
  path : 'about', component : AboutComponent
},
{ path : 'user', children : [
  {
    path : 'list', component : UserListComponent
  }
]},
{path : '', redirectTo : '/home', pathMatch : 'full'},
{path : "**", redirectTo : '/home', pathMatch : 'full'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
