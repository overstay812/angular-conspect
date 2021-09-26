import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users13Component } from './examples/users13/users13.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './examples/user/user.component';
import { HooksComponent } from './examples/hooks/hooks.component';
import { PopupComponent } from './examples/popup/popup.component';

const routes = [
  {
    path: 'users',
    component: Users13Component,
  },
  { path: 'user/:userId', component: UserComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'popup', component: HooksComponent },
];

@NgModule({
  declarations: [
    Users13Component,
    UserComponent,
    HooksComponent,
    PopupComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [Users13Component, UserComponent, HooksComponent, PopupComponent],
  providers: [],
})
export class Part13RoutingModule {}
