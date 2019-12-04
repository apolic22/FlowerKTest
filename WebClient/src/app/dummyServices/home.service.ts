import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homeImages = [
    {
      event: ' Event 1',
      eventLocation: 'Bangalore',
      eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
      img: 'assets/images/rose1.jpg'
    },
     {
      event: ' Event 2',
      eventLocation: 'Dubai',
      eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'assets/images/rose2.jpg'
    },
    {
      event: ' Event 2',
      eventLocation: 'Dubai',
      eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'assets/images/rose3.jpg'
    },
  ];


  constructor() { }

  getHomeImages() {
    return this.homeImages;
  }
}
