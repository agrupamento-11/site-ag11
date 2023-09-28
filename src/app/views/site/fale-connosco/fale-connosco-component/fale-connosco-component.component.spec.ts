import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleConnoscoComponentComponent } from './fale-connosco-component.component';

describe('FaleConnoscoComponentComponent', () => {
  let component: FaleConnoscoComponentComponent;
  let fixture: ComponentFixture<FaleConnoscoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaleConnoscoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaleConnoscoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
