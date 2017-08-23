import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PicUploaderComponent } from './pic-uploader.component';
import { PicService } from '../pic.service';

describe('PicUploaderComponent', () => {
  let component: PicUploaderComponent;
  let fixture: ComponentFixture<PicUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpModule, HttpClientTestingModule],
      providers: [PicService],
      declarations: [ PicUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
