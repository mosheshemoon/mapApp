import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatButtonModule, MatTabsModule, MatInputModule, MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule];

@NgModule({
  exports: [...MATERIAL_MODULES, ReactiveFormsModule, FormsModule],
})
export class MaterialModule {}
