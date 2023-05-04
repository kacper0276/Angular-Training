import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

// Importuje się w appmodule w declarations
@Directive({
  selector: '[appChecked]',
})
export class CheckedDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    let p = this.el.nativeElement;
    console.log(p);
    this.renderer.setStyle(p, 'color', 'red');
    this.renderer.addClass(p, 'dodanaKlasa');
  }
}
