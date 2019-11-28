import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // tslint:disable-next-line:member-ordering
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

}
