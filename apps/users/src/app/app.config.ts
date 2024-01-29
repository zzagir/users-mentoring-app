import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { API_URL } from "@users/http";
import { environment } from "../environments/environment.development";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(),
    {
      provide: API_URL,
      useValue: environment.API_URL
    }
  ]
};
