import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Variable declarations
  public organizations;

  constructor(private http: HttpClient) {
    this.getData();
  }

  public getData() {
    this.http.get('https://api.github.com/organizations').subscribe(data => {
      this.organizations = data;
      console.log(data);
    });
  }

}
