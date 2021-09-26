import { InjectionToken, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part12DependencyInjectionComponent } from './part12-dependency-injection.component';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'DependencyInjection',
    component: Part12DependencyInjectionComponent,
  },
];

const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

//what happen inside the box
const injector: Injector = Injector.create({
  providers: [{ provide: UserService, useClass: UserService }],
});
const userService = injector.get(UserService);
//

@NgModule({
  declarations: [Part12DependencyInjectionComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [Part12DependencyInjectionComponent],
  providers: [
    // { token, recipe }
    { provide: UserService, useClass: UserService },
    UserService,
    {
      provide: API_BASE_URL,
      useValue: 'http://hui.com',
    },
    {
      provide: UserService,
      useFactory: () => {
        if (true) {
          return new UserService();
        } else {
          return API_BASE_URL;
        }
      },
    },
  ],
})
export class Part12DependencyInjectionModule {}
