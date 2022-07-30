import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertodoComponent } from './usertodo.component';

describe('UsertodoComponent', () => {
  let component: UsertodoComponent;
  let fixture: ComponentFixture<UsertodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
