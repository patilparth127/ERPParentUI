import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-login2',
    templateUrl: './login2.component.html',
    styleUrl: './login2.component.scss',
    standalone: false
})
export class Login2Component {
  public routes = routes;
  constructor(private router: Router) {}

  public navigate() {
    this.router.navigate([routes.adminDashboard]);
  }
  public password : boolean[] = [false];

  public togglePassword(index: any){
    this.password[index] = !this.password[index]
  }
}
