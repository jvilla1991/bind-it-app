import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<{interval: number}>;
  intervalId?: NodeJS.Timeout;
  constructor() { }
  ngOnInit(): void {
  }

  onStart() {
    let incrementer = 0;
    console.log("game Started");
    this.intervalId = setInterval(
      () => {
        this.intervalEvent.emit({ interval: incrementer });
        incrementer++;
        console.log(incrementer);
      }
      , 1000);
  }

  onStop() {
    clearInterval(this.intervalId);
  }

}
