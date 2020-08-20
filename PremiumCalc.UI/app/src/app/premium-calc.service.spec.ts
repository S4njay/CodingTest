import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PremiumCalcService } from './premium-calc.service';

describe('PremiumCalcService', () => {
  let premiumCalcService: PremiumCalcService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCalcService],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));
 
  

  it("should call get once for a call to getOccupations", async(() => {
    const response: string[] = ['occupation1'];
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(response);
    
    premiumCalcService = new PremiumCalcService(httpClientSpy);
    premiumCalcService.getOccupations();

    expect(httpClientSpy.get.calls.count()).toBe(1);  
  }));

  it("should call post once for a call to postPremiumForm", async(() => {
    const request: any = {};
    const response: any = {Premium : 0}
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpy.post.and.returnValue(response);
    
    premiumCalcService = new PremiumCalcService(httpClientSpy);
    premiumCalcService.postPremiumForm(request);

    expect(httpClientSpy.post.calls.count()).toBe(1);
  }));
});
