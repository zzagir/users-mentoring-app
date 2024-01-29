import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "./api-url.token";

@Injectable({ providedIn: "root" })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly api_url = inject(API_URL);

  private static get headers(): HttpHeaders {
    const headersConfig = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    return new HttpHeaders(headersConfig);
  }

  public get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.api_url}${url}`, {
      headers: ApiService.headers,
      params
    });
  }

  public post<T, D>(url: string, data?: D): Observable<T> {
    return this.http.post<T>(`${this.api_url}${url}`, JSON.stringify(data), { headers: ApiService.headers });
  }

  public put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${this.api_url}${url}`, JSON.stringify(data), {
      headers: ApiService.headers
    });
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.api_url}${url}`, {
      headers: ApiService.headers
    });
  }
}