import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

interface IUser {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserResolveService implements Resolve<IUser> {
  constructor() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUser> | Promise<IUser> | IUser {
    return { name: 'pete' };
  }
}
