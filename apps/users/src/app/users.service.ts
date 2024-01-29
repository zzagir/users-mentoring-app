import { Observable } from "rxjs";
import { User } from "./user.interface";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class UsersService {
  private readonly http = inject(HttpClient);

  constructor() {
    this.getUsers().subscribe(console.log);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

}