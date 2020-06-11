import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
  isHovering: boolean;
  @Output() uploadedResourceUrl = new EventEmitter<string>();

  file: File;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.file = files.item(0);
  }
  constructor() { }

  uploaded(e) {
    console.log(e);
    this.uploadedResourceUrl.emit(e);
  }

}
