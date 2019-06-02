import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
	formdata;
	emailid;
	passwd;
  constructor(private http:HttpClient) { }

  ngOnInit() {
	  this.formdata= new FormGroup({
		  emailid: new FormControl(""),
		  passwd: new FormControl("")
	  });
  }
  onClickSubmit(data){
	  this.emailid=data.emailid;
	this.passwd=data.passwd;
	
	console.log("submitting");
	this.http.get('http://localhost:8085/login').subscribe();
	
	
	}

}
