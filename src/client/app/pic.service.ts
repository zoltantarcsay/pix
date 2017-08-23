import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Pic } from '../../types/pic';

@Injectable()
export class PicService {
  url = '/api/pic';
  private pics: Observable<Array<Pic>>;
  private picsObserver: Observer<Array<Pic>>;

  constructor(private http: Http) {
    this.pics = Observable.create(observer => this.picsObserver = observer);
  }

  getPics(): Observable<Array<Pic>> {
    this.http.get(this.url)
      .map(res => res.json().sort(this.comparePics))
      .subscribe(pics => this.picsObserver.next(pics));

    return this.pics;
  }

  getUploader(): FileUploader {
    return new FileUploader({ url: this.url });
  }

  comparePics(p1: Pic, p2: Pic) {
    if (p1.createdAt < p2.createdAt) {
      return 1;
    }

    if (p1.createdAt > p2.createdAt) {
      return -1;
    }

    return 0;
  }

}
