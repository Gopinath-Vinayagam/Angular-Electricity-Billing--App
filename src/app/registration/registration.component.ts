import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastRef, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  FirstName!:String;
  LastName!:String;
  ConsumerId!:String;
  EmailId!:String;
  MobileNumber!:String;
  ConsumerType!:String;
  Address!:String;
  Password!:String;
  DateOfBirth!:String;
  ConfirmPassword!:String;
  constructor(private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }


  item="";
  
  ConsumerTypes(item:string){
    this.ConsumerType = item;
    console.log(this.ConsumerType);
  }


validate(){
  var FullName =this.FirstName+" "+this.LastName;
  let ConsumerType = this.ConsumerType;
  let ConsumerId=this.ConsumerId;
  let EmailId=this.EmailId;
  let MobileNumber=this.MobileNumber;
  let Address=this.Address;
  let Password=this.Password;
  let DateOfBirth=this.DateOfBirth;
let ConfirmPassword=this.ConfirmPassword


  console.log(FullName,ConsumerType,ConsumerId,EmailId,MobileNumber,Address,Password,DateOfBirth);
  



 
  //email id expression code
  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z ]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var numbers=/^\(?([0-9]{10})$/;

  if(FullName==null||  FullName.trim()=='')
  {
   this.toastr.warning('Please enter your name');
      
  }
  else if(!FullName.match(letters))
  {
    this.toastr.warning('Name field required only alphabet characters');
  }

  else if(!ConsumerId.match(numbers) || ConsumerId.trim()==''  || ConsumerId==null){
    this.toastr.warning("Enter Valid ConsumerId");
  }
  else if (DateOfBirth==null)
  {
  this.toastr.warning("Enter your Date of Birth ");
  } 

  
  else if(EmailId.trim()==''||EmailId==null)
  {
    this.toastr.warning('Please enter your user email id');
  }
  else if (!EmailId.match(filter))
  {
    this.toastr.warning('Invalid email');
  }
  else if(!MobileNumber.match(numbers) || MobileNumber.trim()=='' || MobileNumber==null){
    this.toastr.warning("Enter Valid Mobile Number");
  }
  else if(ConsumerType==null)
  {
   this.toastr.warning("Select Consumer Type");
  }

  else if (Address==null || Address.trim()==''){
  this.toastr.warning("Enter a valid ADDRESS");
  }



  else if(Password.trim()=='' || Password==null)
  {
    this.toastr.warning('Please enter Password');
  }
  else if(ConfirmPassword.trim()=='')
  {
    this.toastr.warning('Enter Confirm Password');
  }
  else if(!Password.match(pwd_expression))
  {
    this.toastr.warning('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  }
  else if(Password != ConfirmPassword)
  {
    this.toastr.warning('Password not Matched');
  }
  else if(Password.length < 8)
  {
    this.toastr.warning('Password minimum length is 8');
  }
  else if(Password.length > 16)
  {
    this.toastr.warning('Password max length is 16');
  }
  
  
  

  

else
  {                                           
    this.toastr.success('Thank You for Registration & You are Redirecting to Website');
         // Redirecting to other page or webste code. 
         
    const url = "http://localhost:9000/User/register";

    const Url = url + "?FullName=" + FullName + "&EmailId=" + EmailId +"&Password=" + Password+"&MobileNumber=" +MobileNumber+"&ConsumerType=" +ConsumerType +"&Address=" +Address +"&ConsumerId=" +ConsumerId +"&DateOfBirth=" +DateOfBirth;
    
    var obj ={FullName:FullName,EmailId:EmailId,Password:Password,MobileNumber:MobileNumber,ConsumerType:ConsumerType,ConsumerId:ConsumerId,DateOfBirth:DateOfBirth,Address:Address};
    //out.println(url);
    // var obj1 = JSON.stringify(obj);
    // localStorage.setItem("loged",JSON.stringify(obj))

    // this.http.post(url, obj1).subscribe(res=> {
    // let data = (res);
    // console.log(data);
    // alert(data);
    // });

    fetch(Url).then(res=>res.text()).then(res=> {
       let data = (res);
      console.log(data);
      window.location.href="http://localhost:4200/home"; 
       alert(data);
       });


  }
}

check(){
  const url = "http://localhost:9001/User/register";

   // const url = rootUrl + "?FullName=" + FullName + "&EmailId=" + EmailId +"&Password=" + Password+"&MobileNumber=" +MobileNumber+"&ConsumerType=" +ConsumerType +"&Address=" +Address +"&ConsumerId=" +ConsumerId +"&DateOfBirth=" +DateOfBirth;
    let FullName = "arun";
    var obj ={FullName:FullName};
    //out.println(url);
    var obj1 = JSON.stringify(obj);
    localStorage.setItem("loged",JSON.stringify(obj))

    this.http.post(url, obj ).subscribe(res=> {
    let data = (res);
    console.log(data);
    alert(data);
    });

}
}




 