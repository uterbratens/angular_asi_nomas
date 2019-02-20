import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCx1TiCL5P5NzZFUh3tedOB97lIyBTwwrI",
      authDomain: "tienda-73c68.firebaseapp.com"
    });

  }

}
