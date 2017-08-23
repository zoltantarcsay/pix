import { Component, OnInit } from '@angular/core';
import { PicService } from '../pic.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-pic-uploader',
  templateUrl: './pic-uploader.component.html',
  styleUrls: ['./pic-uploader.component.css']
})
export class PicUploaderComponent implements OnInit {
  uploader: FileUploader;
  complete = false;

  constructor(private picService: PicService) { }

  ngOnInit() {
    this.uploader = this.picService.getUploader();
    this.uploader.onAfterAddingAll = () => {
      this.uploader.uploadAll();
      this.complete = false;
    };
    this.uploader.onCompleteAll = () => {
      this.uploader.clearQueue();
      this.picService.getPics();
      this.complete = true;
    };
  }

}
