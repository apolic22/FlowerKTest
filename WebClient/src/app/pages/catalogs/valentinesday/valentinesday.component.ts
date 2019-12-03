import { Component, OnInit } from '@angular/core';
import { ValentinesdayService } from 'src/app/dummyServices/catalogs/valentinesday.service';

@Component({
  selector: 'app-valentinesday',
  templateUrl: './valentinesday.component.html',
  styleUrls: ['./valentinesday.component.css']
})
export class ValentinesdayComponent implements OnInit {

  images: { src: string; title: string; description: string; }[];

  constructor(private valentinesdayService: ValentinesdayService) { }

  ngOnInit() {
    this.images = this.valentinesdayService.getImages();
  }

}
