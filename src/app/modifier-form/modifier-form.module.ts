import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierFormPageRoutingModule } from './modifier-form-routing.module';

import { ModifierFormPage } from './modifier-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierFormPageRoutingModule
  ],
  declarations: [ModifierFormPage]
})
export class ModifierFormPageModule {}
