import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { API_URL } from "@users/http";
import { environment } from "../environments/environment.development";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { USERS_FEATURE_KEY, UsersFacade, usersReducer, userEffects } from "@users/users/users/data-access";


export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(userEffects),
    provideState(USERS_FEATURE_KEY, usersReducer),
    provideStore(),
    UsersFacade,
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(),
    {
      provide: API_URL,
      useValue: environment.API_URL
    }
  ]
};
