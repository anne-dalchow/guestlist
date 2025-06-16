import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "guestlist-a26fb", appId: "1:923400574220:web:c689eaee95b6c023afe529", storageBucket: "guestlist-a26fb.firebasestorage.app", apiKey: "AIzaSyBQPF1pl4wJkGD6aYtjNEH9dRYAzcgeATo", authDomain: "guestlist-a26fb.firebaseapp.com", messagingSenderId: "923400574220" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
