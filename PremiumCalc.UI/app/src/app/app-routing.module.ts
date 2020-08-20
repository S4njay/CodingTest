import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremiumCalcComponent } from './premium-calc.component';

const routes: Routes = [
  {path:"", component:PremiumCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
