import { Component } from '@angular/core';
import { minigame } from "../Easter Egg/Minigame.component";

@Component({
  selector: 'app-page-not-found',
  imports: [minigame],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {}
