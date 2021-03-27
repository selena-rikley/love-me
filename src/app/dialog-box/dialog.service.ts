import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  nextID: number;

  constructor() { }

  // Service message commands
  sendDialogUpdate(id: number) {
    this.nextID = id;
  }

  getDialogUpdate() {
    return this.nextID;
  }

}
