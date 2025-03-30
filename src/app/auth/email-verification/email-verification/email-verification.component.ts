import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-email-verification',
    templateUrl: './email-verification.component.html',
    styleUrl: './email-verification.component.scss',
    standalone: false
})
export class EmailVerificationComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigate() {
    this.router.navigate([routes.login]);
  }
}
