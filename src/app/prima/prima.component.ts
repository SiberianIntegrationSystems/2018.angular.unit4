import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent implements OnInit, OnDestroy {

  name: string;
  birthDate: Date;
  photoSource: string;

  secondsSinceOpen: number = 0;

  timerId: number;

  constructor() {
    this.name = 'Майя Плисецкая';
    this.birthDate = new Date(1925, 10, 25);
    this.photoSource = 'assets/img/pliseckaya.jpg';
  }

  ngOnInit() {
    this.timerId = window.setInterval(() => this.secondsSinceOpen++, 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }

}
