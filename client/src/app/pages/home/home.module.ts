import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { AgmCoreModule } from '@agm/core';
import { CoreModule } from 'src/app/core';


@NgModule({
  declarations: [HomeComponent],
  imports: [CoreModule, CommonModule, RouterModule.forChild(HOME_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDO9mLaSnMjXJjJxl-Lm1OO9kT07KiY2_0'
    })],
})
export class HomeModule {}
