import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private firestore: Firestore) { }

  addGuest(name: string, email: string, confirmed: boolean) {
    const guestRef = collection(this.firestore, 'guests');
    return addDoc(guestRef, {
      name: name,
      email: email,
      confirmed: false
    })
  }
}

