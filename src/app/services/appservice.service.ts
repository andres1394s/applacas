import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  private apiUrlnew = environment.baseUrlApi

  constructor(private httpclient: HttpClient) { }

  getConsult(param: any): Observable<any> {
    try {

      return this.httpclient.post(`${this.apiUrlnew}/Placa/GetPlacaDetail`,param).pipe(
        map(res => res)
      );

    } catch (error) {
      throw error;
    }
  }

  getHorasCita(): Observable<any> {
    try {

      return this.httpclient.get(`${this.apiUrlnew}/Placa/getHorasCita`).pipe(
        map(res => res)
      );

    } catch (error) {
      throw error;
    }
  }

  BookDate(param: any): Observable<any> {
    try {

      return this.httpclient.post(`${this.apiUrlnew}/Placa/BookNewPlacaDate`,param).pipe(
        map(res => res)
      );

    } catch (error) {
      throw error;
    }
  }
}
