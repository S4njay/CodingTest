import { Injectable } from '@angular/core';
import { premiumCalcDto } from './premiumCalcDto'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PremiumCalcService {

  constructor(private http: HttpClient) { }

  getOccupations(): Observable<string[]> {
    return this.http.get<string[]>(environment.apiUrl + "/occupations");
  }

  postPremiumForm(formData: premiumCalcDto): Observable<any> {
    return this.http.post(environment.apiUrl + "/PremiumCalc", formData);
  }
}
