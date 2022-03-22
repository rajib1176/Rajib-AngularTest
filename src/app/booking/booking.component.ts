import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/Booking';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings:Booking[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
