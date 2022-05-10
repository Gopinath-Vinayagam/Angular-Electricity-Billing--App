import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  userMail !: string;
  userPassword !: string;
 
  constructor() { }

  ngOnInit(): void {
  }


Adminvalidate(){


  if (this.userMail==null || this.userMail.trim()=='')
  {
 alert("email id invalid");
}
 else if(this.userPassword.length<8 || this.userPassword.trim()=='')
 {
alert("Enter Valid Password");
}

else
{
alert("Login Successful")

window.location.href="http://localhost:4200/adminprofile";
}

}

}