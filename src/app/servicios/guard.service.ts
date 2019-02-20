import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private autenticationService: AutenticacionService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.autenticationService.isAuthenticated();
  }


}
