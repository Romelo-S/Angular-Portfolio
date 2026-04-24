import { Component, signal, HostListener,Renderer2, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CursorGlowDirective } from "../Components/Cursor-glow.directive";
import { Experience } from "../Experience/Experience";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursorGlowDirective, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('Angular-Portfolio');
}
