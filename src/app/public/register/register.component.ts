import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm : FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){
    this.registerForm = this.fb.group({});
  }


  ngOnInit() {
    this.registerForm = this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      password_confirmation: [['',Validators.required]]
    });
  }

  submitRegistration(){
    const formData = this.registerForm.getRawValue();
   /* const newuser = {
      first_name : formData.first_name,
      last_name : formData.last_name,
      email: formData.email,
      password : formData.password,
      client_id: 2,
      client_secret: 'lYVKaWHflRbqHMFMDrWdJl9LhonRV1nI4lCtcrxD',
      grant_type: 'password',
      scope: '*'
    }
    */
   //console.log(formData);
    this.http.post('http://localhost:8000/register',  formData).subscribe(
      result =>console.log(result) ,
      error =>console.log(error)

    );
  }
}
