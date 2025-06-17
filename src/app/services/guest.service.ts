import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Guest } from '../guest';

@Injectable({
  providedIn: 'root'
})



export class GuestService {

  constructor(private firestore: Firestore) { }

  getGuests(): Observable<Guest[]> {
    const guestRef = collection(this.firestore, 'guests');
    return collectionData(guestRef, { idField: 'id' }) as Observable<Guest[]>;
  }

  addGuest(name: string, email: string, confirmed: boolean) {
    const guestRef = collection(this.firestore, 'guests');  // referenz erstellen mit collection
    return addDoc(guestRef, {                               //addDoc() referenz, data
      name: name || 'undefind',
      email: email || 'undefind',
      confirmed: false
    })
  }
}

