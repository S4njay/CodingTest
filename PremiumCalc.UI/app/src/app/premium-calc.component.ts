import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PremiumCalcService } from './premium-calc.service'
import { premiumCalcDto } from './premiumCalcDto';

@Component({
  selector: 'app-premium-calc',
  templateUrl: './premium-calc.component.html',
  styleUrls: ['./premium-calc.component.css']
})
export class PremiumCalcComponent implements OnInit {

  premiumCalcForm = new FormGroup(
    {
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      occupation: new FormControl(null, Validators.required),
      sumInsured: new FormControl(null, Validators.required),
    }
  )

  invalidAge: number;

  occupations: string[] = [];
  premiumResult: number;

  constructor(private service: PremiumCalcService) { }

  ngOnInit(): void {
    this.service.getOccupations()
      .subscribe(x => this.occupations = x);
  }

  checkAge(): boolean {

    if (this.premiumCalcForm.value['dob'] && this.premiumCalcForm.value['age']) {
      // check age and DOB if they both exist.
      
      var expectedAge = new Date().getFullYear() - new Date(this.premiumCalcForm.value['dob']).getFullYear();

      if (expectedAge != this.premiumCalcForm.value['age']) {
        this.invalidAge = expectedAge;
        return false;
      }
      this.invalidAge = undefined;
      return true;

    }

    return false;
  }

  submit(): void {

    if (this.premiumCalcForm.invalid) {
      return;
    }

    if (!this.checkAge()) {
      return;
    }

    let dto: premiumCalcDto =
    {
      name: this.premiumCalcForm.value['name'],
      age: this.premiumCalcForm.value['age'],
      occupation: this.premiumCalcForm.value['occupation'],
      sumInsured: this.premiumCalcForm.value['sumInsured'],
      dob: this.premiumCalcForm.value['dob']
    }

    this.service.postPremiumForm(dto)
      .subscribe(x => {
        this.premiumResult = x["Premium"]
      });
  }
}
