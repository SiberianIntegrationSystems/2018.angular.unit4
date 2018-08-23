import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Prima} from "./prima";

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent implements OnInit, OnDestroy {

  prima: Prima;

  secondsSinceOpen: number = 0;

  timerId: number;

  constructor() {
    this.prima = new Prima(
      'Майя Плисецкая',
      new Date(1925, 10, 20),
      'assets/img/pliseckaya.jpg'
    );
  }

  ngOnInit() {
  }

  startInterval() {
    this.timerId = setInterval(() => this.secondsSinceOpen++, 1000);
  }

  stopInterval() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

}
