import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicComponent } from './pic.component';
import { BytesPipe } from 'angular-pipes/esm';

describe('PicComponent', () => {
  let component: PicComponent;
  let fixture: ComponentFixture<PicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicComponent, BytesPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
