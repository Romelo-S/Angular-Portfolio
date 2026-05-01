import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { ClickerService } from "./clicker.service";

@Component({
    selector:'minigame',
    templateUrl: './minigame.html',
    styleUrl: './minigame.css'
})

export class minigame implements OnInit,OnDestroy{
  private intervalId?: number;

  constructor(public clicker: ClickerService ) {}
  ngOnInit(): void {
      this.intervalId = window.setInterval(() => {
      this.clicker.tickAuto();
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  onClick() {
    this.clicker.clickClicker();
  }

  onUpgrade() {
    this.clicker.buyUpgrade();
  }

  onAuto() {
    this.clicker.buyAutoClicker();
  }
}