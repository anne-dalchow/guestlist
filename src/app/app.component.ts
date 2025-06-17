import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestService } from './services/guest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = '';
  email: string = '';
  guests$!: Observable<Guest[]>;

  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.guests$ = this.guestService.getGuests();
  }

  addGuests() {
    this.guestService.addGuest(this.name, this.email, false)
      .then(() => {
        this.name = '';
        this.email = '';
        console.log("Guest added");
      })
      .catch((error: any) => {
        console.error("Error adding guest:", error);
      });
  }
}

