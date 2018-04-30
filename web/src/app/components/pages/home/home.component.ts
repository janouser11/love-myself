import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { $ } from 'protractor';

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

  loading: boolean = true;
  isColumn1Loaded: boolean = false;
  isColumn2Loaded: boolean = false;
  isColumn3Loaded: boolean = false;
  isColumn4Loaded: boolean = false;

  columnOneImages: any = ["assets/photos/2.jpg", "assets/photos/5.jpg"]

  columnTwoImages: any = ["assets/photos/7.jpg", "assets/photos/12.jpg"]

  columnThreeImages: any = ["assets/photos/16.jpg", "assets/photos/15.jpg"]

  columnFourImages: any = ["assets/photos/9.jpg", "assets/photos/31.jpg"]

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
            padding: 0px;
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

  onLoad() {
    this.loading = false;
  }

  loaded(columnNumber: number) {


    switch (columnNumber) {
      case 1: {
        this.isColumn1Loaded = true;
        break;
      }
      case 2: {
        this.isColumn2Loaded = true;
        break;
      }
      case 3: {
        this.isColumn3Loaded = true;
        break;
      }
      case 4: {
        this.isColumn4Loaded = true;
        break;
      }
      default: {
        console.log("Error")
        break;
      }
    }

    if (this.isColumn1Loaded && this.isColumn2Loaded && this.isColumn3Loaded && this.isColumn4Loaded) {
      this.loading = false;
    }
  }

}
