import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveImageSubComponent } from './save-image-sub.component';

describe('SaveImageSubComponent', () => {
  let component: SaveImageSubComponent;
  let fixture: ComponentFixture<SaveImageSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveImageSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveImageSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
