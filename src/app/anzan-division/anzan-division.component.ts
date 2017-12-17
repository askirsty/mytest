import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-anzan-division',
  templateUrl: './anzan-division.component.html',
  styleUrls: ['./anzan-division.component.css']
})
export class AnzanDivisionComponent implements OnInit {
  ersteZahl: number = 3;
  zweiteZahl: number = 2;
  division_result = "";
  runAnzan = false;
  startAnzan = true;
  zeigeResults = false;
  resultAnzan = false;
  komma = false;
  zahl1 = "0";
  zahl2 = "0";
  result = 0;

  constructor() { }

  ngOnInit() {
  }

  startDivision() : void {
    this.runAnzan = true;
    this.resultAnzan = false;
    this.startAnzan = false;
    var num1 = this.getRandom(Math.pow(10,this.ersteZahl-1),Math.pow(10,this.ersteZahl));
    //console.log("num1: " + num1);
    var loop = 0;
    do {
      if (loop>10) {
        loop = 0;
        num1 = this.getRandom(Math.pow(10,this.ersteZahl-1),Math.pow(10,this.ersteZahl));
      }
      loop++;
      do {
        var num2 = this.getRandom(Math.pow(10,this.zweiteZahl-1),Math.pow(10,this.zweiteZahl));
      } while (num2 == 1);
    } while (!this.komma && num1%num2);
    this.zahl1 = String(num1);
    this.zahl2 = String(num2);
    this.result = num1 / num2;
  }

  zeigeResult() {
    this.runAnzan = false;
    this.resultAnzan = true;
    this.zeigeResults = false;
    this.startAnzan = true;
    if (this.komma) {
      this.division_result = "= " + String(this.result.toFixed(3));
    } else {
      this.division_result = "= " + String(this.result);
    }
  }

  getRandom(min: number, max: number) : number {
    return Math.round(Math.random() * (max - min + 1) - 0.5) + min;;
  }
}
