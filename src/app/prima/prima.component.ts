import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent implements OnInit {

  name: string;
  birthDate: Date;
  photoSource: string;

  

  constructor() {
    this.name = 'Майя Плисецкая';
    this.birthDate = new Date(1925, 10, 25);
    this.photoSource = 'assets/img/pliseckaya.jpg';
  }

  ngOnInit() {
  }

}
