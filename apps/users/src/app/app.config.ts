import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { API_URL } from "@users/http";
import { environment } from "../environments/environment.development";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { USERS_FEATURE_KEY, UsersFacade, usersReducer } from "@users/users/users/data-access";
import { UsersEffects } from "../../../../libs/users/users/data-access/src/lib/+state/users.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(UsersEffects),
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
