import { ImageServiceService } from './../../dummyServices/image-service.service';
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
    mobile = false;

    images: { src: string; title: string; description: string; }[];

    constructor(private userService: UserService, private imagesService: ImageServiceService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    event_list = [
        {
          event: ' Event 1',
          eventLocation: 'Bangalore',
          eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
          img: 'assets/images/rose.png',
          eventStartDate: new Date('2019/05/20'),
          eventEndingDate: new Date('2019/05/24')
        },
        //  {
        //   event: ' Event 2',
        //   eventLocation: 'Dubai',
        //   eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
        //   img: 'assets/images/rose2.jpg',
        //   eventStartDate: new Date('2019/07/28'),
        //   eventEndingDate: new Date('2019/07/30')
        // },
        //  {
        //   event: ' Event 3',
        //   eventLocation: 'New York',
        //   eventDescription: 'NewYork sits on top of event hosting',
        //   img: 'assets/images/rose3.jpg',
        //   eventStartDate: new Date('2020/05/20'),
        //   eventEndingDate: new Date('2020/05/24')
        // }
      ];

    ngOnInit() {
        // this.loadAllUsers();

        this.images = this.imagesService.getImages();

        if (window.screen.width < 420) { // 768px portrait
          this.mobile = true;
        }
    }

    onResize(event) {

      const innerWidth = event.target.innerWidth;
      console.log(innerWidth);

      if (innerWidth < 420) {
         this.mobile = true;
      } else {
         this.mobile = false;
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
