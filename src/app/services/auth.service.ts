import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../interfaces/user";
const apiUrl = environment.backendUrl;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login_api(data:User) {
    const formatData = {...data , documentNumber:data.documentNumber.toString()}
    return this.http.post<any>(`${apiUrl}/api/login`,formatData);
  }

}