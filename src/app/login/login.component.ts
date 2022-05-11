import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userMail !: string;
  userPassword !: string;
  loggedInUser: any;
  authService: any;
  

 
  
  
  constructor(private hc:HttpClient,private rt:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  Loginvalidate(){
let userMail=this.userMail;
let userPassword=this.userPassword;
console.log(userMail,userPassword)
    if (userMail==null || userMail.trim()==null)
    {
      this.toastr.warning("email id invalid");
    }
   else if( userPassword ==null)
   {
    this.toastr.warning("Enter Valid Password");
   }
   else if( userPassword.length<8)
   {
    this.toastr.warning("Enter length not match");
   }
  else
  {
  //alert("Login Successful")


    let url = "http://localhost:9000/User/login";
    let data={emailId:userMail,password:userPassword}

    this.hc.post<any>(url,data).subscribe(res=>{
      this.toastr.success("Login Successful")
      const user= localStorage.setItem("token",JSON.stringify(res))
      //this.loggedInUser = res != null ? JSON.parse(res): null;
      console.log(res)
    },(err)=>{
      console.log(err)
      this.toastr.error("Login UnSuccessful");
    });

    

    this.rt.navigate(["/home"]);
    this.toastr.success("Loggedin as  "+userMail);
    
    //window.location.href="http://localhost:4200/home";
   }
  }
  



  
  }
  
  




