import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [MatButtonModule, MatTabsModule, MatInputModule, MatFormFieldModule];

@NgModule({
  exports: [...MATERIAL_MODULES, ReactiveFormsModule, FormsModule],
})
export class MaterialModule {}
