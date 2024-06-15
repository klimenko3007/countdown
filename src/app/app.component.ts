import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { EventFormComponent } from './components/event-form/event-form.component'
import { CountdownTextComponent } from './components/countdown-text/countdown-text.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventFormComponent, CountdownTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title: string = 'FrontendChallenge'
}
