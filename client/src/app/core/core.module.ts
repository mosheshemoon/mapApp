import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AuthGuardService } from './guards';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor, ApiInterceptor } from './interceptors';

@NgModule({
  exports: [MaterialModule, HttpClientModule],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
