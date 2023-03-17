import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorFoundComponent } from './nor-found.component';

describe('NorFoundComponent', () => {
  let component: NorFoundComponent;
  let fixture: ComponentFixture<NorFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
