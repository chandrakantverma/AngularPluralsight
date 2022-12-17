import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  messag:string = "hello";
  buttonClick:boolean = false;
  btnSelector: String = 'Generate';
  col:String = 'New';

  
  constructor(private http : HttpClientModule) { 

  }

  ngOnInit(): void {
   
  }


  buttonCheck(){
    if(this.buttonClick===false){
      this.buttonClick = true;
      this.btnSelector = "Remove";
    }
    else{
      this.buttonClick = false;
      this.btnSelector = "Generate";
    }
  }

}
