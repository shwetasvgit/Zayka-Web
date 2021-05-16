import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from "../../models/user";
import { Router } from "@angular/router";

import { AuthServiceService } from '../auth/auth.service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user = {} as User;

  constructor(private authService:  AuthServiceService, public afAuth: AngularFireAuth, private router: Router) {
  }
 /* navigate() {
    this.router.navigate(["Display"]);
  }

 /* async login(email: string, password: string) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    console.log(result);
    if (result) {
      this.router.navigate(["displayComponent"]);
      //this.navigate;
    }
  }
  */


  ngOnInit() {
  }

}
