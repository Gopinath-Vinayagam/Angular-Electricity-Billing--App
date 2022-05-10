import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  
  
  ngOnInit(): void {
   
  }
  
  constructor() { }

  userMail!:String;
  CurrentPassword!:String;
  newPassword!:String;
  

  changePass(){


    



  }
}
