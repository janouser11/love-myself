import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  images: string[];

  public carouselBannerItems: Array<any> = ['assets/images/accepting.svg',
    'assets/images/forgiving.svg',
    'assets/images/believing.svg',
    'assets/images/encouraging.svg',
    'assets/images/expressing.svg'];
  public carouselBanner: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.images = [
      'assets/images/accepting.svg',
      'assets/images/forgiving.svg',
      'assets/images/believing.svg',
      'assets/images/encouraging.svg',
      'assets/images/expressing.svg'
    ];

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 4,
      speed: 500,
      interval: 1000,
      loop: true,
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
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: #7be9c2;
            padding: 5px;
            margin: 0 3px;
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
      // loop: false,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };

    // this.carouselBannerLoad();
  }



}


