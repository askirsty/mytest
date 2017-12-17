import { Component, OnInit } from '@angular/core';
import { AnzanSetting } from '../AnzanSetting';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-anzan-multiplication',
  templateUrl: './anzan-multiplication.component.html',
  styleUrls: ['./anzan-multiplication.component.css']
})
export class AnzanMultiplicationComponent implements OnInit {
  ersteZahl: number;
  zweiteZahl: number;
  multiplication_result = "";
  runAnzan = false;
  startAnzan = true;
  zeigeResults = false;
  resultAnzan = false;
  zahl1 = "0";
  zahl2 = "0";
  result = 0;
  firstStart: boolean;

  constructor() {
      this.firstStart = true;
  }

  ngOnInit() {
    if (this.firstStart) {
      this.ersteZahl = 3;
      this.zweiteZahl = 2;
      this.firstStart = false;
    }
  }

  startMultiplication() {
    this.runAnzan = true;
    this.resultAnzan = false;
    this.startAnzan = false;
    var num1 = this.getRandom(Math.pow(10,this.ersteZahl-1),Math.pow(10,this.ersteZahl));
    var num2 = this.getRandom(Math.pow(10,this.zweiteZahl-1),Math.pow(10,this.zweiteZahl));
    this.zahl1 = String(num1);
    this.zahl2 = String(num2);
    this.result = num1 * num2;
  }

  zeigeResult() {
    this.runAnzan = false;
    this.resultAnzan = true;
    this.zeigeResults = false;
    this.startAnzan = true;
    this.multiplication_result = "= " + String(this.result);
  }

  getRandom(min: number, max: number) : number {
    return Math.round(Math.random() * (max - min + 1) - 0.5) + min;;
  }
}
