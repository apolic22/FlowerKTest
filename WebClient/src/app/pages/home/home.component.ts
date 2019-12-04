import { HomeService } from './../../dummyServices/home.service';
import { RouterModule, Router } from '@angular/router';
import { CatalogsService } from './../../dummyServices/catalogs.service';
import { ImageServiceService } from './../../dummyServices/image-service.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    mobile = false;

    showNavigationIndicators = false;

    homeImages: { event: string; eventLocation: string; eventDescription: string; img: string; }[];

    images: { src: string; title: string; description: string; }[];

    catalogs: { path: string; src: string; title: string; description: string; }[];

    constructor(
      config: NgbCarouselConfig,
      private userService: UserService,
      private imagesService: ImageServiceService,
      private catalogsService: CatalogsService,
      private homeService: HomeService,
      private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        config.showNavigationIndicators = false;

    }

    ngOnInit() {
        // this.loadAllUsers();

        this.images = this.imagesService.getImages();
        this.catalogs = this.catalogsService.getCatalogs();
        this.homeImages = this.homeService.getHomeImages();

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

   changeRoute(route) {
    this.router.navigate([route]);
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
