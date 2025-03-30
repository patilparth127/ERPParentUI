import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

const routes: Routes = [
  { path: '', component: PagesComponent,children: [
    
    {
      path: 'profile',
      component: ProfileComponent,
    },
    { path: 'blank-page', component: BlankPageComponent },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: 'under-maintenance',
        component: UnderMaintenanceComponent,
      },
  ], },
  {
    path: 'activities',
    loadChildren: () =>
      import('./activities/activities.module').then((m) => m.ActivitiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
