import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirthdaysService {

  images = [
    {
      src: 'assets/img/image1.jpg',
      title: 'Birthday 1',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: 'assets/img/image2.jpg',
      title: 'Birthday 2',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: 'assets/img/image3.jpg',
      title: 'Birthday 3',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];


  constructor() { }

  getImages() {
    return this.images;
  }
}
