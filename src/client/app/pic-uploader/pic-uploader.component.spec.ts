import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend } from '@angular/http';

import { PicUploaderComponent } from './pic-uploader.component';
import { PicService } from '../pic.service';

describe('PicUploaderComponent', () => {
  let component: PicUploaderComponent;
  let fixture: ComponentFixture<PicUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpModule],
      providers: [
        PicService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      declarations: [PicUploaderComponent]
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
