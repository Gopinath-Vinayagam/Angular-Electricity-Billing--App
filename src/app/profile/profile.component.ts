import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  loggedInUser:any;

  ngOnInit(): void {
    const user= localStorage.getItem("loged")
    this.loggedInUser = user != null ? JSON.parse(user): null;
    let consumerNo =this.loggedInUser.ConsumerId;
    let userPassword =this.loggedInUser.userPassword;
    let userMail =this.loggedInUser.userMail;
    let Username=this.loggedInUser.Username;

    
  }






}