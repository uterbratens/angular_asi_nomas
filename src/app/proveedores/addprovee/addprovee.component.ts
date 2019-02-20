import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  @ViewChild('formprov') formprov: NgForm;
  proveedor: any;
  nombre: string[] = ['juan', 'matias', 'pepe', 'esteban', 'marcos'];

  constructor() {
    this.proveedor = {
      nombre: '',
      apellido: '',
      mail: ''
    };
  }

  ngOnInit() {
  }
  onSubmit() {
    this.proveedor.nombre = this.formprov.value.nombre;
    this.proveedor.apellido = this.formprov.value.apellido;
    this.proveedor.mail = this.formprov.value.mail;
    this.formprov.reset();
  }
}
