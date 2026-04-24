import { Directive, HostListener, Renderer2, ElementRef, AfterViewInit, ViewChild, Component } from '@angular/core';

@Directive({
  selector: '[cursorGlow]'

})
export class CursorGlowDirective implements AfterViewInit {
  private glowEl!: HTMLElement;


  constructor(private host: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const mainDiv = this.renderer.selectRootElement('.root', true);
    this.glowEl = this.renderer.createElement('div'); //TODO figure out what is causing double div creation. Change color of glow and then pulsate
    this.renderer.addClass(this.glowEl, 'cursor-glow');
    this.renderer.appendChild(mainDiv, this.glowEl);
    console.log("This has been appened" + mainDiv);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    this.renderer.setStyle(this.glowEl, 'left', `${x}px`);
    this.renderer.setStyle(this.glowEl, 'top', `${y}px`);
    this.renderer.setStyle(this.glowEl,'opacity', '1');
  }
   @HostListener('document:mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.glowEl,'opacity', '0');
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.glowEl,'opacity', '1');
  }

}
