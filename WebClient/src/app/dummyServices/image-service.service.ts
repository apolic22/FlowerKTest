import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

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


  constructor() { }

  getImages() {
    return this.images;
  }
}
