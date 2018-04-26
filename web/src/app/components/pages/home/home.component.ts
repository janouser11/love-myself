import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[];

  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;
  public carouselWidth: number = 800;

  innerWidth: number;

  constructor() {
    this.innerWidth = (window.screen.width);
  }

  onResize(event) {
    this.determineCarouselBannerItems(event.target.innerWidth);
  }

  ngOnInit() {
    this.determineCarouselBannerItems(this.innerWidth);

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 4,
      speed: 500,
      interval: 800,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 0px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: #7be9c2;
            width: 0px;
            padding: 8px;
            margin: 0 5px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: #7be9c2;
              width: 10px;
          }
        `
      },
      load: 2,
      custom: 'banner',
      touch: true,
      loop: false,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };

  }
  determineCarouselBannerItems(width: number) {
    if (width < this.carouselWidth) {
      this.carouselBannerItems = [
        'assets/images/accepting-mobile.svg',
        'assets/images/forgiving-mobile.svg',
        'assets/images/believing-mobile.svg',
        'assets/images/encouraging-mobile.svg',
        'assets/images/expressing-mobile.svg']

    } else {
      this.carouselBannerItems = [
        'assets/images/accepting.svg',
        'assets/images/forgiving.svg',
        'assets/images/believing.svg',
        'assets/images/encouraging.svg',
        'assets/images/expressing.svg']
    }
  }

}
