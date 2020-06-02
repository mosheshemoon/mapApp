import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { AgmCoreModule } from '@agm/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(HOME_ROUTES),
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDO9mLaSnMjXJjJxl-Lm1OO9kT07KiY2_0'
    })],
})
export class HomeModule {}
