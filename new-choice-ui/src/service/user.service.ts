import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private httpClient:HttpClient) { }

  addUser(addUser: User):Observable<User[]> {
    return this.httpClient.post<User[]>(this.baseApiUrl + '/api/auth/register',addUser);
  }

  addUserLogin(loginUser: User):Observable<User[]> {
    return this.httpClient.post<User[]>(this.baseApiUrl + '/api/auth/login',loginUser);
  }

  getUser(id: number):Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseApiUrl+'/api/login/'+id);
  }

  updateUser(id: number, updateuser:User):Observable<User[]> {
    return this.httpClient.put<User[]>(this.baseApiUrl+'/api/register/'+id,updateuser);
  }
}
