import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { FormDataLocalStorageService } from '../../services/form-data-local-storage.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
})
export class EventFormComponent {
  public eventForm = new FormGroup({
    eventName: new FormControl(''),
    eventDate: new FormControl(''),
  })

  constructor(private formDataLocalStorageService: FormDataLocalStorageService) {}

  public onBlur() {
    const name = this.eventForm.get('eventName')?.value
    const date = this.eventForm.get('eventDate')?.value
    if (name && date) {
      this.formDataLocalStorageService.saveFormData({ name, date })
    } else if (this.eventForm.dirty) {
      this.eventForm.setErrors({ allFieldsRequired: true })
    } else {
      this.eventForm.setErrors(null)
    }
  }
}
