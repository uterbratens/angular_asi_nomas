import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  lista: any = [
    {
      nombre: 'sopa',
      apellido: 'macaco',
      mail: 'sopadomacaco@umadelicia.com'
    },
    {
      nombre: 'olha',
      apellido: 'macaco',
      mail: 'olhaomacaco@umadelicia.com'
    }
  ];

  constructor() { }

  getServicio(): any {
    return this.lista;
  }
}
