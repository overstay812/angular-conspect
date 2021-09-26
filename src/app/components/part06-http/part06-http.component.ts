import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Data {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}
export interface Post {
  id: number;
  title: string;
}

@Component({
  selector: 'app-part06-http',
  templateUrl: './part06-http.component.html',
})
export class Part06HttpComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public state: Data[] = [];

  // get
  public getDataFromServer(): void {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Autorisation', 'auth-token');
    this.http
      .get<Data[]>('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        params,
        headers,
      })
      .pipe(map((item) => (this.state = item)))
      .subscribe();
  }

  //post
  public sendDataToServer(): void {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Autorisation', 'auth-token');
    const body: Post = {
      id: 1,
      title: 'sended data',
    };
    this.http
      .post<Post>('https://jsonplaceholder.typicode.com/todos', body, {
        params,
        headers,
      })
      .subscribe();
  }
  ngOnInit(): void {}
}

// add later delete, put, request
// add interceptor https://www.youtube.com/watch?v=z9U_xYSsVRw&list=PLDyvV36pndZF-vwsVB48ivZyNJ4ETBKNY&index=18&ab_channel=JavaScript.ru
