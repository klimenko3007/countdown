import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
})
export class EventFormComponent {
  public eventForm = new FormGroup({
    eventName: new FormControl(''),
    eventDate: new FormControl(''),
  })

  public onBlur() {
    const name = this.eventForm.get('eventName')?.value
    const date = this.eventForm.get('eventDate')?.value
    console.log('onBlur', name, date)
  }
}
