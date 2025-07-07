import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePromoComponent } from './side-promo.component';

describe('SidePromoComponent', () => {
  let component: SidePromoComponent;
  let fixture: ComponentFixture<SidePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
