import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Interceptor-demo';

  constructor(private http: HttpClient) {}

  onClick1() {
    console.log('button 1 clicked');

    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe( res => {});   // no headers set here but inteptor set headers
  }

  onClick2() {

    console.log('button 2 clicked');

    this.http.get('http://udith.just.demo/get').subscribe( res => {console.log(res); });   // This will get a response

  }

}
