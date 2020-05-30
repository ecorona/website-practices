import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  constructor() {}

  clase: String = '';
  setClase(clase: String) {
    setTimeout(() => {
      this.clase = clase;
    });
  }
}
