import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /*
  the password should have:
  
  1 uppercase letter
  1 lowercase letter
  A number
  A minimum length of 8.
  */
  registroForm: FormGroup;
  userData: any;

  erroresForm = {
    'email': '',
    'password': ''
  };
  mensajesValidacion = {
    'email': {
      'required': 'Email es requerido',
      'email': 'introduzca un email correcto'
    },
    'password': {
      'required': 'Contraseña es requerido',
      'pattern': 'tiene que tener una letra minuscula, una mayuscula y un numero',
      'minlength': 'y mas de 8 caracteres'
    }
  };


  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService,
    private router: Router, activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]]
    });
    this.registroForm.valueChanges.subscribe(data =>  this.onValueChanged(data) );
    this.onValueChanged();
  }
  onSubmit() {
    this.userData = this.saveData();
    this.autenticacionService.registroUsuario(this.userData);
    this.router.navigate(['/inicio']);
  }
  saveData() {
    const saveData = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value,
    }
    return saveData;
  }

  onValueChanged(data?: any) {
    if (!this.registroForm) { return; }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const mensaje = this.mensajesValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += mensaje[key] + '';
        }
      }
    }
  }

}
