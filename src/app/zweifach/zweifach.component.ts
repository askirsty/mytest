import { Component, OnInit } from '@angular/core';
import { AnzanSetting } from '../AnzanSetting';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-zweifach',
  templateUrl: './zweifach.component.html',
  styleUrls: ['./zweifach.component.css']
})
export class ZweifachComponent implements OnInit {
  settings: AnzanSetting = {
    anzahlZahlen: 1,
    anzahl: 5,
    pause: 1000,
    minus: true,
    beep: true
  };

  addition_subtruction1 = "";
  addition_subtruction2 = "";
  summe1: number = 0;
  addition_subtruction_summe1 = "";
  summe2: number = 0;
  addition_subtruction_summe2 = "";
  runAnzan = false;
  startAnzan = true;
  zeigeResults = false;
  resultAnzan = false;

  constructor() {}

  ngOnInit() {
  }

  startAdditionSubstraction() : void {
    this.summe1 = 0;
    this.summe2 = 0;
    this.runAnzan = true;
    this.resultAnzan = false;
    this.startAnzan = false;
    var array1 = Array(this.settings.anzahl);
    this.summe1 = this.getArray(array1);
    console.log( "array1: " + array1);
    this.addition_subtruction1 = String(array1[0]);
    var array2 = Array(this.settings.anzahl);
    this.summe2 = this.getArray(array2);
    console.log( "array2: " + array2);
    this.addition_subtruction2 = String(array2[0]);
    Observable
      .interval(this.settings.pause)
      .take(this.settings.anzahl)
      .finally(() => {
          this.zeigeResults = true;
          this.runAnzan = false;
        }
      )
      .subscribe(i => {
        this.addition_subtruction1 = String(array1[i+1]);
        this.addition_subtruction2 = String(array2[i+1]);
      });
  }

  getArray(array) {
    var old: number = 0; var summe = 0;
    for (var i=0; i<this.settings.anzahl; i++) {
      do {
        array[i]  = this.getZahl(this.settings.minus);
      } while (summe + array[i] < 0 || array[i] == 0
                  || Math.abs(array[i]) == Math.pow(10,this.settings.anzahlZahlen)
                || (i >0 && array[i] == array[i-1]));
      summe = summe+ array[i];
    }

    return summe;
  }

  zeigeResult() {
    this.resultAnzan = true;
    this.zeigeResults = false;
    this.startAnzan = true;
    this.addition_subtruction_summe1 = String(String(this.summe1));
    this.addition_subtruction_summe2 = String(String(this.summe2));
  }

  getZahl(minus: boolean = false) : number {
    var a = this.getRandom(1,10);
    var b = this.getRandom(Math.pow(10,this.settings.anzahlZahlen-1),Math.pow(10,this.settings.anzahlZahlen));
    if ( minus && (a % 2 > 0))
      var c = -1;
    else
      var c= 1;
    return c*b;
  }

  getRandom(min: number, max: number) : number {
    return Math.round(Math.random() * (max - min + 1) - 0.5) + min;;
  }
  }
