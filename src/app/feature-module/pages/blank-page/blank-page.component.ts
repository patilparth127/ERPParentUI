import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrl: './blank-page.component.scss',
    standalone: false
})
export class BlankPageComponent {
  public routes = routes;
}
