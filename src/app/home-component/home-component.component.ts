import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  showaddress:boolean=false;
  aboutme:boolean=false;
  constructor() { }
  showAddress(){
    console.log("hello");
    this.showaddress=true;
  }
  hideAddress(){
    this.showaddress=false;
  }
  about(){
    this.aboutme=true;
  }
  
  ngOnInit() {
  }
}
