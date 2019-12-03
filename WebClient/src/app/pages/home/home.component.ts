import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    notMobile = true;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    images = [
      {
        src: 'assets/img/image1.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image2.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image3.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image4.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image5.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image6.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image7.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image8.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        src: 'assets/img/image9.jpg',
        title: 'Lorem Ipsum',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      
    ];

    event_list = [
        {
          event: ' Event 1',
          eventLocation: 'Bangalore',
          eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
          img: 'assets/img/image2.jpg',
          eventStartDate: new Date('2019/05/20'),
          eventEndingDate: new Date('2019/05/24')
        },
         {
          event: ' Event 2',
          eventLocation: 'Dubai',
          eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
          img: 'assets/img/image2.jpg',
          eventStartDate: new Date('2019/07/28'),
          eventEndingDate: new Date('2019/07/30')
        },
         {
          event: ' Event 3',
          eventLocation: 'New York',
          eventDescription: 'NewYork sits on top of event hosting',
          img: 'assets/img/image2.jpg',
          eventStartDate: new Date('2020/05/20'),
          eventEndingDate: new Date('2020/05/24')
        },
         {
          event: ' Event 4',
          eventLocation: 'Singapore',
          eventDescription: 'Singapore is another great hosting city',
          img: 'assets/img/image2.jpg',
          eventStartDate: new Date('2018/05/20'),
          eventEndingDate: new Date('2018/05/24')
        },
        {
          event: ' Event 5',
          eventLocation: 'Berlin',
          eventDescription: 'Berlin is best place to hang on',
          img: 'assets/img/image4.jpg',
          eventStartDate: new Date('2017/07/10'),
          eventEndingDate: new Date('2017/08/14')
        },
        {
          event: ' Event 6',
          eventLocation: 'Mumbai',
          eventDescription: 'Mumbai is hub of startups',
          img: 'assets/img/image5.jpg',
          eventStartDate: new Date(),
          eventEndingDate: new Date()
        },
        {
          event: ' Event 7',
          eventLocation: 'Barcelona',
          eventDescription: 'Barcelona is another good city',
          img: 'assets/img/image2.jpg',
          eventStartDate: new Date(),
          eventEndingDate: new Date()
        },
      ];

      // upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
      // past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
      // current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())));


    ngOnInit() {
        this.loadAllUsers();

        if (window.screen.width > 420) { // 768px portrait
          this.notMobile = true;
        }
    }

    onResize(event) {

      const innerWidth = event.target.innerWidth;
   
      if (innerWidth <= 420) {
         alert('MOBILE');
      }
      else{
        alert('not mobile');
      }
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
