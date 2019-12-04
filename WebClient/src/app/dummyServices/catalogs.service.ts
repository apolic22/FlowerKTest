import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {
  catalogs = [
    {
      path: '/birthdays',
      src: 'assets/img/image1.jpg',
      title: 'Birthdays',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      path: '/valentinesday',
      src: 'assets/img/image2.jpg',
      title: 'Valentine\'s Day',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      path: '/anniversary',
      src: 'assets/img/image3.jpg',
      title: 'Anniversary',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet.',
    },
  ];


  constructor() { }

  getCatalogs() {
    return this.catalogs;
  }
}
