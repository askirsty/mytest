import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnzanAdditionSubtractionComponent }   from './anzan-addition-subtraction/anzan-addition-subtraction.component';
import { AnzanMultiplicationComponent } from './anzan-multiplication/anzan-multiplication.component';
import { AnzanDivisionComponent } from './anzan-division/anzan-division.component';
import { ZweifachComponent } from './zweifach/zweifach.component';

const routes: Routes = [
  { path: '', redirectTo: '/AnzanAdditionSubtraction', pathMatch: 'full' },
  { path: 'AnzanMultiplication', component: AnzanMultiplicationComponent },
  { path: 'AnzanDivision', component: AnzanDivisionComponent },
  { path: 'AnzanAdditionSubtraction', component: AnzanAdditionSubtractionComponent },
  { path: 'zweifach', component: ZweifachComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
