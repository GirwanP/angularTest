import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	formdata;
	showformdata=false;
  constructor() { }

  ngOnInit() {
  }
	onClickSubmit(data){
		this.formdata.un=data.userName;
		this.formdata.pws=data.password;
		//this.formdata=data;
		this.showformdata=true;
		alert(this.formdata.un);
	}
}
