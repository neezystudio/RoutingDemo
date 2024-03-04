import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOfferComponent } from './component-offer.component';

describe('ComponentOfferComponent', () => {
  let component: ComponentOfferComponent;
  let fixture: ComponentFixture<ComponentOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentOfferComponent]
    });
    fixture = TestBed.createComponent(ComponentOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
