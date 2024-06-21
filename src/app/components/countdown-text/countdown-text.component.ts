import { Component } from '@angular/core'
import { FormDataLocalStorageService } from '../../services/form-data-local-storage.service'
import { CommonModule } from '@angular/common'
import { Subject, filter, interval, map, startWith, switchMap, takeUntil } from 'rxjs'
import { eventDoneMessage, formatTimeLeft } from '../../utils/functions'
import { FullscreenTextFitterComponent } from '../fullscreen-text-fitter/fullscreen-text-fitter.component'

@Component({
  selector: 'app-countdown-text',
  standalone: true,
  imports: [CommonModule, FullscreenTextFitterComponent],
  templateUrl: './countdown-text.component.html',
  styleUrl: './countdown-text.component.scss',
})
export class CountdownTextComponent {
  public readonly data$ = this.formDataLocalStorageService.formData$
  private destroy$ = new Subject<void>()

  public readonly timeLeft$ = this.data$.pipe(
    switchMap(data => {
      const eventDate = new Date(data.date)
      const currentDate = new Date()

      if (eventDate <= currentDate) {
        return [eventDoneMessage]
      }
      return interval(1000).pipe(
        startWith(0),
        map(() => {
          const currentTime = new Date()
          if (currentTime >= eventDate) {
            return eventDoneMessage
          }
          return formatTimeLeft(eventDate)
        }),
        filter(timeLeft => timeLeft !== eventDoneMessage),
        takeUntil(this.destroy$),
      )
    }),
  )

  constructor(private formDataLocalStorageService: FormDataLocalStorageService) {}

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
