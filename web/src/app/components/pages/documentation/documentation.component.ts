import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) { }
  loading: boolean = true;
  isPageHidden: boolean = true;
  isColumn1Loaded: boolean = false;
  isColumn2Loaded: boolean = false;
  isColumn3Loaded: boolean = false;
  isColumn4Loaded: boolean = false;


  columnOneImages: any = ["assets/photos/1.jpg", "assets/photos/5.jpg",
    "assets/photos/9.jpg", "assets/photos/13.jpg", "assets/photos/17.jpg",
    "assets/photos/21.jpg", "assets/photos/25.jpg", "assets/photos/29.jpg",
    "assets/photos/33.jpg", "assets/photos/39.jpg"]

  columnTwoImages: any = ["assets/photos/2.jpg", "assets/photos/6.jpg",
    "assets/photos/10.jpg", "assets/photos/14.jpg", "assets/photos/18.jpg",
    "assets/photos/22.jpg", "assets/photos/26.jpg", "assets/photos/30.jpg",
    "assets/photos/34.jpg", "assets/photos/37.jpg"]

  columnThreeImages: any = ["assets/photos/3.jpg", "assets/photos/7.jpg",
    "assets/photos/11.jpg", "assets/photos/15.jpg", "assets/photos/19.jpg",
    "assets/photos/23.jpg", "assets/photos/27.jpg", "assets/photos/31.jpg",
    "assets/photos/35.jpg", "assets/photos/38.jpg"]

  columnFourImages: any = ["assets/photos/4.jpg", "assets/photos/8.jpg",
    "assets/photos/12.jpg", "assets/photos/16.jpg", "assets/photos/20.jpg",
    "assets/photos/24.jpg", "assets/photos/28.jpg", "assets/photos/32.jpg",
    "assets/photos/36.jpg", "assets/photos/40.jpg"]

  ngOnInit() {
    this.spinnerService.show();
  }

  async ngAfterViewInit() {

    await this.delay(2000);
    this.isPageHidden = false;
    this.spinnerService.hide();
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
