import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
loged !:any;
data !: any 
  constructor() { }
  loggedInUser:any;

  ngOnInit(): void {

    this.data = localStorage.getItem("token");
    this.loged= JSON.parse(this.data);
  
    console.log(this.loged)
    
  }

 




}