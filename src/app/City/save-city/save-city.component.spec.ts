import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCityComponent } from './save-city.component';

describe('SaveCityComponent', () => {
  let component: SaveCityComponent;
  let fixture: ComponentFixture<SaveCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
