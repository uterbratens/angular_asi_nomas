import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  isAuth() {
    return this.autenticacionService.isAuthenticated();
  }
  onLogout() {
    this.autenticacionService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
