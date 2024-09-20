import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appTextFit]',
  standalone: true,
})
export class TextFitDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.whiteSpace = 'nowrap'
    this.el.nativeElement.style.textWrap = 'none'
  }

  private resizeObserver: ResizeObserver

  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.adjustFontSize()
    })

    this.resizeObserver.observe(this.el.nativeElement.parentNode)
  }

  private adjustFontSize(): void {
    const desiredWidth = this.el.nativeElement.parentNode.getBoundingClientRect().width
    const currentWidth = this.el.nativeElement.clientWidth
    const currentFontSize = parseFloat(window.getComputedStyle(this.el.nativeElement).fontSize)

    const newFontSize = (desiredWidth / currentWidth) * currentFontSize
    this.el.nativeElement.style.fontSize = `${newFontSize}px`
    this.el.nativeElement.style.lineHeight = `${newFontSize}px`
  }
}
