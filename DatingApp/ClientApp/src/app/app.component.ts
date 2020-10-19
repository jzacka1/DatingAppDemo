import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {

  }

  ngOnInit() {
    this.getUsers();
    this.setCurrenUser();
  }

  setCurrenUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    this.http.get('api/appusers').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
