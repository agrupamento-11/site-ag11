import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrganismoComponent } from './page-organismo.component';

describe('PageOrganismoComponent', () => {
  let component: PageOrganismoComponent;
  let fixture: ComponentFixture<PageOrganismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOrganismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrganismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
