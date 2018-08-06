
import { Injectable } from '@angular/core';

// add these things for subscribing and observeables
import { HttpClient } from '@angular/common/Http';
import { DataStruct } from './DataStruct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _url='../assets/movies.json';

  constructor(private http:HttpClient) { }

  getData():Observable<DataStruct[]>{
    return this.http.get<DataStruct[]>(this._url);
  }
}
