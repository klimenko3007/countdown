import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class FormDataLocalStorageService {
  private _storageKey = 'eventFormData'
  private _initialEventName = 'Tomorrow'
  private _initialEventDate = this.getTomorrowDate()
  private _initialFormData = this.getFormData()
  private _formData = new BehaviorSubject<{ name: string; date: string }>(this._initialFormData)

  public formData$ = this._formData.asObservable()

  public saveFormData(formData: { name: string; date: string }) {
    this._formData.next({ name: formData.name, date: formData.date })
    localStorage.setItem(this._storageKey, JSON.stringify(formData))
  }

  public getFormData(): { name: string; date: string } {
    const defaultFormData = { name: this._initialEventName, date: this._initialEventDate }
    const storedItem = localStorage.getItem(this._storageKey)
    if (!storedItem) {
      return defaultFormData
    }
    try {
      const parsedItem = JSON.parse(storedItem)
      return {
        name: parsedItem.name || defaultFormData.name,
        date: parsedItem.date || defaultFormData.date,
      }
    } catch (e) {
      console.error('Error parsing JSON from localStorage', e)
      return defaultFormData
    }
  }
  private getTomorrowDate(): string {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }
}
