import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class FormDataLocalStorageService {
  private _storageKey = 'eventFormData'
  private _formData = new BehaviorSubject<{ name: string; date: string }>({
    name: this.getFormData().name || '',
    date: this.getFormData().date || '',
  })

  public formData$ = this._formData.asObservable()

  constructor() {}

  public saveFormData(formData: { name: string; date: string }) {
    this._formData.next({ name: formData.name, date: formData.date })
    localStorage.setItem(this._storageKey, JSON.stringify(formData))
  }

  public getFormData(): { name: string; date: string } {
    return JSON.parse(localStorage.getItem(this._storageKey) || '{}')
  }

  public clearFormData() {
    localStorage.removeItem(this._storageKey)
  }
}
