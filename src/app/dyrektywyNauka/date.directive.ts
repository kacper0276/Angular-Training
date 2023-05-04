import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDate]',
})
export class DateDirective {
  // HostListener - działa jak addEventListnenear tylko w dyrektywie
  @Input()
  date: string;

  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    console.log(this.date);
    this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    console.log('mouseleave');
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
