import { Injectable } from '@angular/core';
import { premiumCalcDto } from './premiumCalcDto'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PremiumCalcService {

  constructor(private http: HttpClient) { }

  getOccupations(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:49874/api/occupations");
  }

  postPremiumForm(formData: premiumCalcDto): Observable<any> {
    return this.http.post("http://localhost:49874/api/PremiumCalc", formData);
  }
}
