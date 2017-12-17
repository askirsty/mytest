import { Component, OnInit } from '@angular/core';
import { AnzanSetting } from '../AnzanSetting';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-anzan-addition-subtraction',
  templateUrl: './anzan-addition-subtraction.component.html',
  styleUrls: ['./anzan-addition-subtraction.component.css']
})
export class AnzanAdditionSubtractionComponent implements OnInit {
  settings: AnzanSetting = {
    anzahlZahlen: 2,
    anzahl: 10,
    pause: 500,
    minus: true,
    beep: true
  };

  addition_subtruction = "tests";
  summe: number = 0;
  addition_subtruction_summe = "";
  runAnzan = false;
  startAnzan = true;
  zeigeResults = false;
  resultAnzan = false;
  monitorAufloesung = "";

  constructor() {
  }

  ngOnInit() {
    this.monitorAufloesung = String(screen.width)  +"×" + String(screen.height);
  }

  startAdditionSubstraction() : void {
    this.summe = 0;
    this.runAnzan = true;
    this.resultAnzan = false;
    this.startAnzan = false;
    var array = Array(this.settings.anzahl);
    var old: number = 0;
    for (var i=0; i<this.settings.anzahl; i++) {
      do {
        array[i]  = this.getZahl(this.settings.minus);
        // console.log( "numb: " + array[i]);
        // console.log( "summe: " + this.summe);
      } while (this.summe + array[i] < 0 || array[i] == 0
      || Math.abs(array[i]) == Math.pow(10,this.settings.anzahlZahlen)
      || (i >0 && array[i] == array[i-1]));
      this.summe = this.summe + array[i];
      console.log( "summe1: " + this.summe);
    }
    console.log( "array: " + array);
    this.addition_subtruction = String(array[0]);
    Observable
      .interval(this.settings.pause)
      .take(this.settings.anzahl)
      .finally(() => {
          this.zeigeResults = true;
          this.runAnzan = false;
        }
      )
      .subscribe(i => {
        this.addition_subtruction = String(array[i+1]);
      });
  }

  zeigeResult() {
    this.resultAnzan = true;
    this.zeigeResults = false;
    this.startAnzan = true;
    this.addition_subtruction_summe = "= " + String(String(this.summe));
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
