import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss',
    standalone: false
})
export class ResetPasswordComponent {
  public routes = routes;
  public password : boolean[] = [false];

  public togglePassword(index: any){
    this.password[index] = !this.password[index]
  }
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.success])
  }
}
