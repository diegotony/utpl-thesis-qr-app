import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-users',
  templateUrl: './check-users.page.html',
  styleUrls: ['./check-users.page.scss'],
})
export class CheckUsersPage implements OnInit {
data:any;
  constructor() { }

  ngOnInit() {
  }

  register(form) {
    console.log(form.value)
    this.data = form.value

  }
}
