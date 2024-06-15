import { Component } from '@angular/core'
import { FormDataLocalStorageService } from '../../services/form-data-local-storage.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-countdown-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-text.component.html',
  styleUrl: './countdown-text.component.scss',
})
export class CountdownTextComponent {
  constructor(private formDataLocalStorageService: FormDataLocalStorageService) {}
  public readonly data$ = this.formDataLocalStorageService.formData$
}
