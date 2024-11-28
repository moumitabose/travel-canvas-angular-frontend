import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPackageListComponent } from './show-package-list.component';

describe('ShowPackageListComponent', () => {
  let component: ShowPackageListComponent;
  let fixture: ComponentFixture<ShowPackageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPackageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
