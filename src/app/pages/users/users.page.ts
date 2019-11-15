import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  goToInformation(){
    this.router.navigateByUrl("information");
  }

  goToCheckUser(){
    this.router.navigateByUrl("check-users");
  }

}
