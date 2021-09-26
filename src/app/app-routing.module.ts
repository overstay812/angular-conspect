import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Part01BaseKnowledgeComponent } from './components/part01-base-knowledge/part01-base-knowledge.component';
import { Part02InputAndOutputComponent } from './components/part02-input-and-output/part02-input-and-output.component';
import { Part03StylesComponent } from './components/part03-styles/part03-styles.component';
import { Part04PipeComponent } from './components/part04-pipe/part04-pipe.component';
import { Part05ServiceComponent } from './components/part05-service/part05-service.component';
import { Part06HttpComponent } from './components/part06-http/part06-http.component';
import { Part07DirectiveComponent } from './components/part07-directive/part07-directive.component';
import { Part08FormComponent } from './components/part08-form/part08-form.component';
import { Part09LifecycleHooksComponent } from './components/part09-lifecycle-hooks/part09-lifecycle-hooks.component';
import { Part10DecoratorComponent } from './components/part10-decorator/part10-decorator.component';
import { Part11NgContentAndNgContainerComponent } from './components/part11-ng-content-and-ng-container/part11-ng-content-and-ng-container.component';
import { Part13RoutingComponent } from './components/part13-routing/part13-routing.component';
import { Users13Component } from './components/part13-routing/examples/users13/users13.component';
import { UserComponent } from './components/part13-routing/examples/user/user.component';
import { HooksComponent } from './components/part13-routing/examples/hooks/hooks.component';
import { AuthGuard } from './components/part13-routing/examples/hooks/auth.guard';
import { PopupComponent } from './components/part13-routing/examples/popup/popup.component';

const routes: Routes = [
  {
    path: '',
    component: Part01BaseKnowledgeComponent,
  },
  {
    path: 'InputAndOutput',
    component: Part02InputAndOutputComponent,
  },
  {
    path: 'Styles',
    component: Part03StylesComponent,
  },
  {
    path: 'Pipe',
    component: Part04PipeComponent,
  },
  {
    path: 'Service',
    component: Part05ServiceComponent,
  },
  {
    path: 'Http',
    component: Part06HttpComponent,
  },
  {
    path: 'Directive',
    component: Part07DirectiveComponent,
  },
  {
    path: 'Form',
    component: Part08FormComponent,
  },
  {
    path: 'LifecycleHooks',
    component: Part09LifecycleHooksComponent,
  },
  {
    path: 'Decorator',
    component: Part10DecoratorComponent,
  },
  {
    path: 'NgContentAndNgContainer',
    component: Part11NgContentAndNgContainerComponent,
  },
  {
    loadChildren: () =>
      import('./components/part13-routing/part13-routing.module').then(
        (mod) => mod.Part13RoutingModule
      ),
    path: 'routing',
    component: Part13RoutingComponent,
    // children: [
    //   {
    //     path: 'users',
    //     component: Users13Component,
    //     data: {
    //       title: 'users',
    //       anotherParam: 'Somithing Else',
    //     },
    //   },
    //   { path: 'user/:userId', component: UserComponent },
    //   {
    //     path: 'hooks',
    //     component: HooksComponent,
    //     data: {}, // create for async data
    //     canActivate: [AuthGuard], // AuthGuard: true/false
    //     // resolve: UserResolveService,     DOES NOT wORK!!!! ask Andry how to resolve
    //   },
    //   { path: 'popup', component: PopupComponent, outlet: 'popup' },
    // ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
