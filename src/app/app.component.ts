import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: number = 0;

  ngOnInit(): void {
    setInterval(() => this.time++, 1000);
  }

}
