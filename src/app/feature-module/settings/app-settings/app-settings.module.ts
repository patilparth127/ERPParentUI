import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { AppSettingsComponent } from './app-settings.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { SharedModule } from '../../../shared/shared.module';
import { InvoiceSettingsComponent } from './invoice-settings/invoice-settings.component';

@NgModule({
  declarations: [AppSettingsComponent, CustomFieldsComponent, InvoiceSettingsComponent],
  imports: [CommonModule, AppSettingsRoutingModule, SharedModule],
})
export class AppSettingsModule {}
