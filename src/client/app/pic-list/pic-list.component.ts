import { Component, OnInit } from '@angular/core';
import { PicService } from '../pic.service';
import { Observable } from 'rxjs/Observable';
import { Pic } from '../../../types/pic';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.css']
})
export class PicListComponent implements OnInit {
  pics: Observable<Array<Pic>>;

  constructor(private picService: PicService) { }

  ngOnInit() {
    this.pics = this.picService.getPics();
  }

}
