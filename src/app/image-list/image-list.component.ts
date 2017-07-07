import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { MasonryModule } from 'angular2-masonry';
import { hmTouchEvents } from 'angular-hammer';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  getImage: string;
  imagesFound: boolean = false;
  searching: boolean = false;

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(private _imageService: ImageService) { }

  searchImages(query: string) {
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  ngOnInit() {
  }

}
