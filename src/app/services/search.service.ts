import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { SearchPage } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  
  getResult(query: string): Observable<any> {
    return this.httpClient.jsonp(`${environment.serverUrl}${query}`, 'callback')
  }
  getResultsByQuery(obj): Observable<SearchPage> {
    let { query = 'angular', language = "ua", dateRestrict } = obj
    return this.httpClient.jsonp<SearchPage>(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCv6d65Twk3a26FHP8I5-KejnsRFZDHGNk&cx=017576662512468239146:omuauf_lfve&q=${query}&gl=${language}&cr=country${language.toUpperCase()}&lr=lang_${language}${dateRestrict? `&dateRestrict=${dateRestrict}` : null}`, 'callback')
  }
}
