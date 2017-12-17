import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';

import { AppRoutingModule }     from './app-routing.module';
import { AnzanMultiplicationComponent } from './anzan-multiplication/anzan-multiplication.component';
import { AnzanAdditionSubtractionComponent }   from './anzan-addition-subtraction/anzan-addition-subtraction.component';
import { AnzanDivisionComponent } from './anzan-division/anzan-division.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ZweifachComponent } from './zweifach/zweifach.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    AnzanAdditionSubtractionComponent,
    AnzanMultiplicationComponent,
    AnzanDivisionComponent,
    ZweifachComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
