import { AnniversaryService } from './../../../dummyServices/catalogs/anniversary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {


  images: { src: string; title: string; description: string; }[];

  constructor(private anniversaryService: AnniversaryService) { }

  ngOnInit() {
    this.images = this.anniversaryService.getImages();
  }

}
