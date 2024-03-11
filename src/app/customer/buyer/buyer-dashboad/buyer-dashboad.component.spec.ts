import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboadComponent } from './buyer-dashboad.component';

describe('BuyerDashboadComponent', () => {
  let component: BuyerDashboadComponent;
  let fixture: ComponentFixture<BuyerDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDashboadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
