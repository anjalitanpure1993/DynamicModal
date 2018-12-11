import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private getEvents(eventIdList, pageStart) {

    // API call to get list of organizations
    /*return this.http.get('https://api.github.com/organizations')
      .map((res) => {
      });*/
  }
}
