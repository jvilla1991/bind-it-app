import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // 3. We can totally take our renderer if we use Host Binding to bind to the HostProperty
  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // 1. This is fine, but we use HostListener to listen to events that will allow use to dynamically change the backgrounds
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  // 2. HostListener will listen to events from the DOM
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    // 3. We comment out the line above with the renderer as we're accessing the HTML property using the Host Binding
    this.backgroundColor = 'blue';
  }

  // 2. HostListener will listen to events from the DOM
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

    // 3. We comment out the line above with the renderer as we're accessing the HTML property using the Host Binding
    this.backgroundColor = 'transparent'
  }

}
