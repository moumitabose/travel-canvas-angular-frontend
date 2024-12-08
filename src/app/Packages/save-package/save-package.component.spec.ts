import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePackageComponent } from './save-package.component';

describe('SavePackageComponent', () => {
  let component: SavePackageComponent;
  let fixture: ComponentFixture<SavePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
