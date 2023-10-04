import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bind-it-app';
  numbers:  number[] = [];

  handleIntervalEvent( data: { interval: number }) {
    this.numbers.push(data.interval)
  }
}
