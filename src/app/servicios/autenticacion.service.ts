import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  registroUsuario(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password).catch(error => { console.log(error) });
  }
  inicioDeSesion(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(res => {
        console.log(res);
        this.router.navigate(['/']);
      }).catch(err => {
        console.log(err);
      })
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) { return true; }
    else { return false; }
  }

  logout() {
    firebase.auth().signOut();
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
}
