import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizerComponent } from './archives/organizer/organizer.component';
import { UsersComponent } from './core/users/users.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'archives',
    component: OrganizerComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
  {
    path : '**',
    redirectTo: 'archives'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
