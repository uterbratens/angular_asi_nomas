import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PresupuestosService } from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base = 0;
  tipo = 0;
  iva = 0;
  total = 0;
  id: string;

  constructor(private pf: FormBuilder,
    private prespuestosService: PresupuestosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.prespuestosService.getPresupuesto(this.id).subscribe(presupuesto => {
        this.presupuesto = presupuesto;
      })
    })

  }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total
    });
    this.onChanges();
  }
  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });

  }

  onSubmit() {
    this.presupuesto = this.guardarPresupuesto();
    this.prespuestosService.putPresupuesto(this.presupuesto, this.id).subscribe(newpres => {
          this.router.navigate(['/presupuestos']);
    });
    this.presupuestoForm.reset();
  }
  guardarPresupuesto(): any {
    const savePresupuesto: any = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    };
    return savePresupuesto;
  }
}
