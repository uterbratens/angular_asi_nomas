import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm: FormGroup;
  userData: any;
  mensaj = false;

  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService,
    private router: Router, activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required,
      Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]]
    });
  }
  onSubmit() {
    this.userData = this.saveData();
    this.autenticacionService.inicioDeSesion(this.userData);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.mensaj = true;
      }
    }, 2000);
  }
  saveData() {
    const saveData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    }
    return saveData;
  }
  isAuth() {
    return this.autenticacionService.isAuthenticated();
  }
}
