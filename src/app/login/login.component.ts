import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userMail !: string;
  userPassword !: string;
  ConsumerId!:string;
  Username !:string;
  constructor() { }

  ngOnInit(): void {
  }
  Loginvalidate(){
let userMail=this.userMail;
let userPassword=this.userPassword;
let ConsumerId=this.ConsumerId;
var Username="Gopinath Vinayagam";
    if (userMail==null || userMail.trim()==null)
    {
   alert("email id invalid");
  }
   else if(userPassword.length<8)
   {
  alert("Enter Valid Password");
  }
  else if(ConsumerId.length<10)
  {
 alert("Enter Valid Consumer Id With Area CODE ");
 }
  else
  {
  alert("Login Successful")

  
  alert("Loggedin as  "+userMail);
    

    const rootUrl = "http://localhost:9000/User/login";

    const url = rootUrl + "?ConsumerId"+ ConsumerId +"&userPassword=" + userPassword +"&userMail=" + userMail;
    var obj ={ConsumerId:ConsumerId,userPassword:userPassword,userMail:userMail,Username:Username};
    //out.println(url);
    
    localStorage.setItem("loged",JSON.stringify(obj))
    
   
	  document.write("Welcome " + userMail);

    fetch(url)
    .then(res=>res.text())
    .then(res=> {
    let data = res.trim();
    console.log(data);
    alert(data);
    });

   
    window.location.href="http://localhost:4200/profile";
   }
  }
  
  }
  
  




