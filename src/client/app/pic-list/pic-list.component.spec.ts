import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PicListComponent } from './pic-list.component';
import { PicService } from '../pic.service';

describe('PicListComponent', () => {
  let component: PicListComponent;
  let fixture: ComponentFixture<PicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpModule],
      providers: [
        PicService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      declarations: [PicListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
