import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-fullscreen-text-fitter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fullscreen-text-fitter.component.html',
  styleUrl: './fullscreen-text-fitter.component.scss',
})
export class FullscreenTextFitterComponent {
  @Input() public text: string = ''
  @Input() public textStyle: { [key: string]: string | number } = {} // Style input as an object
}
