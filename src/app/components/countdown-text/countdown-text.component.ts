import { Component } from '@angular/core'
import { FormDataLocalStorageService } from '../../services/form-data-local-storage.service'
import { CommonModule } from '@angular/common'
import { combineLatest, interval, map, startWith } from 'rxjs'
import { formatTimeLeft } from '../../utils/functions'

@Component({
  selector: 'app-countdown-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-text.component.html',
  styleUrl: './countdown-text.component.scss',
})
export class CountdownTextComponent {
  public readonly data$ = this.formDataLocalStorageService.formData$
  private interval$ = interval(1000).pipe(startWith(0))

  public readonly timeLeft$ = combineLatest([this.data$, this.interval$]).pipe(
    map(([data, _]) => {
      const eventDate = new Date(data.date)
      return formatTimeLeft(eventDate)
    }),
  )

  constructor(private formDataLocalStorageService: FormDataLocalStorageService) {}
}
