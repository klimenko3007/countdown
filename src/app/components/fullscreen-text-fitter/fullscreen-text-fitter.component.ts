import { CommonModule } from '@angular/common'
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core'

@Component({
  selector: 'app-fullscreen-text-fitter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fullscreen-text-fitter.component.html',
  styleUrl: './fullscreen-text-fitter.component.scss',
})
export class FullscreenTextFitterComponent {
  @Input() public text: string
  @Input() public textStyle: { [key: string]: string | number }

  @ViewChild('textElement') textElement: ElementRef<HTMLElement>

  private resizeObserver: ResizeObserver

  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.adjustFontSize()
    })

    this.resizeObserver.observe(this.textElement.nativeElement)
  }

  constructor(private hostElement: ElementRef) {}

  @HostListener('window:resize')
  public onResize(): void {
    this.adjustFontSize()
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  }

  private adjustFontSize(): void {
    let desiredWidth = this.hostElement.nativeElement.getBoundingClientRect().width
    let currentWidth = this.textElement.nativeElement.clientWidth
    let currentFontSize = parseFloat(
      window.getComputedStyle(this.textElement.nativeElement).fontSize,
    )

    let newFontSize = (desiredWidth / currentWidth) * currentFontSize

    this.textElement.nativeElement.style.fontSize = `${newFontSize}px`
  }
}
