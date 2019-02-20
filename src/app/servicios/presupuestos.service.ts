import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presUrl = 'https://tienda-73c68.firebaseio.com/presupuestos.json';
  preUrl = 'https://tienda-73c68.firebaseio.com/presupuestos';


  constructor(private http: Http) { }

  crearPresu(presupuesto: any) {
    const newPres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'ContentType': 'application/json'
    });
    return this.http.post(this.presUrl, newPres, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }
  getPresupuestos() {
    return this.http.get(this.presUrl)
      .map(
        res => res.json()
      );
  }
  getPresupuesto(id$: string) {
    const url = `${this.preUrl}/${id$}.json`;
    return this.http.get(url).map(res => res.json());
  }

  putPresupuesto(presupuesto: any, id$: string) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'ContentType': 'application/json'
    });
    const url = `${this.preUrl}/${id$}.json`;
    return this.http.put(url, newpres, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  delPresupuestos(id$: string) {
    const url = `${this.preUrl}/${id$}.json`;
    return this.http.delete(url)
      .map(res => {
        res.json();
      });
  }

}
