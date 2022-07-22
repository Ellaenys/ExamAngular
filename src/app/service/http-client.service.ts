import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private _httpClient : HttpClient) { }

  getRequest<T>(url: string) : Observable<T> {
    return this._httpClient.get<T>(url);
  }
}
