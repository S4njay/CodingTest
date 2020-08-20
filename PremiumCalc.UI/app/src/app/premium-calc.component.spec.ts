import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PremiumCalcComponent } from './premium-calc.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PremiumCalcService } from './premium-calc.service';
import { premiumCalcResponse } from './premiumCalcResponse';



describe('PremiumCalcComponent', () => {
  let component: PremiumCalcComponent;
  let fixture: ComponentFixture<PremiumCalcComponent>;
  let premiumCalcService: PremiumCalcService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCalcComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([PremiumCalcService], s => {
    premiumCalcService = s,
    fixture = TestBed.createComponent(PremiumCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PremiumCalcComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Premium Calculator'`, () => {
    const fixture = TestBed.createComponent(PremiumCalcComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe("Premium Calculator");
  });

  it('should render form in expected div class', () => {
    const fixture = TestBed.createComponent(PremiumCalcComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form').textContent).toBeDefined;
  });


  it("should call getOccupations on ngOnInit", async(() => {
    const response: string[] = [];

    spyOn(premiumCalcService, 'getOccupations').and.returnValue(of(response))

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.occupations).toEqual(response);
  }));

  it("should call postPremiumForm on submit", async(() => {
    const response = { Premium: 0 };

    spyOn(premiumCalcService, 'postPremiumForm').and.returnValue(of(response))

    component.submit();

    fixture.detectChanges();

    expect(component.premiumResult).toEqual(response.Premium);
  }));
});
