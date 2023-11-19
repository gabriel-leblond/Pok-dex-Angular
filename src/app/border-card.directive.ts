import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#e5e5e5');
   }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#fd4b4b');
    // console.log('survol');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#e5e5e5');
    // console.log('sortie');
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 6px ${color}`
  }


}
