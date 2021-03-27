import { Component, OnInit } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  label: string = "contatore";
  count: number = 0;
  constructor() {}

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  ngOnInit() {}
}
