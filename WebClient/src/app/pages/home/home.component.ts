import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    event_list = [
        {
          event: ' Event 1',
          eventLocation: 'Bangalore',
          eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
          img: 'https://picsum.photos/900/500?random&t=1',
          eventStartDate: new Date('2019/05/20'),
          eventEndingDate: new Date('2019/05/24')
        },
         {
          event: ' Event 2',
          eventLocation: 'Dubai',
          eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
          img: 'https://picsum.photos/900/500?random&t=3',
          eventStartDate: new Date('2019/07/28'),
          eventEndingDate: new Date('2019/07/30')
        },
         {
          event: ' Event 3',
          eventLocation: 'New York',
          eventDescription: 'NewYork sits on top of event hosting',
          img: 'https://picsum.photos/900/500?random&t=4',
          eventStartDate: new Date('2020/05/20'),
          eventEndingDate: new Date('2020/05/24')
        },
         {
          event: ' Event 4',
          eventLocation: 'Singapore',
          eventDescription: 'Singapore is another great hosting city',
          img: 'https://picsum.photos/900/500?random&t=6',
          eventStartDate: new Date('2018/05/20'),
          eventEndingDate: new Date('2018/05/24')
        },
        {
          event: ' Event 5',
          eventLocation: 'Berlin',
          eventDescription: 'Berlin is best place to hang on',
          img: 'https://picsum.photos/900/500?random&t=7',
          eventStartDate: new Date('2017/07/10'),
          eventEndingDate: new Date('2017/08/14')
        },
        {
          event: ' Event 6',
          eventLocation: 'Mumbai',
          eventDescription: 'Mumbai is hub of startups',
          img: 'https://picsum.photos/900/500?random&t=8',
          eventStartDate: new Date(),
          eventEndingDate: new Date()
        },
        {
          event: ' Event 7',
          eventLocation: 'Barcelona',
          eventDescription: 'Barcelona is another good city',
          img: 'https://picsum.photos/900/500?random&t=6',
          eventStartDate: new Date(),
          eventEndingDate: new Date()
        },
      ];

      upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
      past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
      current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())));


    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers();
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
