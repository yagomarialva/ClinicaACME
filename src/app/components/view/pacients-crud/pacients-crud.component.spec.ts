import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientsCrudComponent } from './pacients-crud.component';

describe('PacientsCrudComponent', () => {
  let component: PacientsCrudComponent;
  let fixture: ComponentFixture<PacientsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientsCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
