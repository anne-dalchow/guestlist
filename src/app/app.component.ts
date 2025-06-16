import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestService } from './services/guest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = '';
  email: string = '';

  constructor(private guestService: GuestService) { }

  addGuest() {
    this.guestService.addGuest(this.name, this.email, false)
      .then(() => {
        console.log('Guest added successfully');
        this.name = '';
        this.email = '';
      })
      .catch((error: any) => {
        console.error('Error adding guest: ', error);
      });
  }
}

