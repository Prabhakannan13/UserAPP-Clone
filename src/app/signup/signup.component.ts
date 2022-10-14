import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  name=""
  mobileno=""
  gender=""
  emailid=""
  address=""
  pincode=""
  bloodgroup=""
  dob=""
  age=""
  parentname=""
  password=""
  confirmpassword=""

  status:boolean=false
  readValues=()=>{
    let data={
      "name":this.name,
      "mobileno":this.mobileno,
      "gender":this.gender,
      "emailid":this.emailid,
      "address":this.address,
      "pincode":this.pincode,
      "bloodgroup":this.bloodgroup,
      "dob":this.dob,
      "age":this.age,
      "parentname":this.parentname,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
    this.status=true
  }

  ngOnInit(): void {
  }

}
