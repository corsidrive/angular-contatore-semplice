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
  max: number;

  @Input()
  count: number = 0;
  test: number = 0;
  constructor() {}

  increment() {
    if (this.max !== undefined) {
      this.count = this.count < this.max ? ++this.count : this.max;
    } else {
      ++this.count;
    }
  }

  decrement() {}

  ngOnInit() {}
}
