import { Component } from '@angular/core';
import { routes } from '../../shared/routes/routes';

@Component({
    selector: 'app-error-404',
    templateUrl: './error-404.component.html',
    styleUrl: './error-404.component.scss',
    standalone: false
})
export class Error404Component {
  public routes = routes;
}
