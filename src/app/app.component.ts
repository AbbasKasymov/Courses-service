import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'courses';
  constructor(public auth: AuthenticationService) {}
  userName = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.userName = this.auth.getUserInfo();
      console.log(this.userName);
    }, 250);
  }
}
