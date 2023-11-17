import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
   }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  setBorder(color: string) {
    this.el.nativeElement.style.outline = `solid 4px red ${color}`
  }


}
