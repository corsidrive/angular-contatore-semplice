import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  @Input()
  label: string = "contatore";
  @Input()
  max: number

  @Input()
  min: number
 
  @Input()
  step = 1

  @Input()
  count: number = 0;
  constructor() {}

  increment() {
    if (this.max !== undefined) {
      this.count = this.count < this.max ? this.count+=this.step : this.max;
    } else {
      console.log(this.count += this.step);
    }
  }

  decrement() {
    if (this.min !== undefined) {
      this.count = this.count > this.min ? --this.count : this.min;
    } else {
      --this.count;
    }
  }

  ngOnInit() {}
}
