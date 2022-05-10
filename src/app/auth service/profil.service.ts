import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  loggedIn() {
    return !!localStorage.getItem("token")

  }

  constructor() { }
}
