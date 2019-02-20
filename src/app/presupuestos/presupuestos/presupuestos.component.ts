import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos().subscribe(presup => {
      for (const id$ in presup) {
        const p = presup[id$];
        p.id$ = id$;
        this.presupuestos.push(presup[id$]);
      }
    });
  }
  eliminarPresupuesto(id$: string) {
    this.presupuestosService.delPresupuestos(id$).subscribe(res => {
      this.presupuestos = [];
      this.presupuestosService.getPresupuestos().subscribe(presup => {
        for (const id$ in presup) {
          const p = presup[id$];
          p.id$ = id$;
          this.presupuestos.push(presup[id$]);
        }
      });
    });
  }
  ngOnInit() {
  }



}
