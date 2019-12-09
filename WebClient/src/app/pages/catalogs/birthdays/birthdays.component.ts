import { BirthdaysService } from './../../../dummyServices/catalogs/birthdays.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {

  images: { src: string; title: string; description: string; }[];

  constructor(private birthdaysService: BirthdaysService) { }

  ngOnInit() {
    this.images = this.birthdaysService.getImages();
  }

}
