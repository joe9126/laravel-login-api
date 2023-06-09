import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Laravel Angular Login API';
  loggedIn : boolean = false;
  constructor(){}

  ngOnInit(){
    this.loggedIn = localStorage.getItem('token') !== null ;
  }

  logout(){
    localStorage.removeItem('token');
  }
}
